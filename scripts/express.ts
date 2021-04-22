import path from "path";
import find from "findit";
import { default as express, Express, RequestHandler } from "express";

const allowedHttpMethods = ["get", "post", "patch", "delete" ] as const;
type AllowedHttpMethods = (typeof allowedHttpMethods)[number];

type Handler =
  | RequestHandler
  | Record<AllowedHttpMethods, RequestHandler>
  | { method: AllowedHttpMethods, path?: string, handler: RequestHandler }[];

const isAllowedHttpMethod = (method: AllowedHttpMethods): method is AllowedHttpMethods => allowedHttpMethods.includes(method);

const port = 3000;
const apiDir = path.resolve(path.dirname(__dirname), "api");

const findFiles = (dir: string = __dirname, regexp: RegExp | null = null): Promise<string[]> => (new Promise((resolve, reject) => {
  const finder = find(dir);
  const files = [];
  finder.on("file", (file: string) => {
    if (regexp instanceof RegExp) {
      if (file.match(regexp)) {
        files.push(file);
      }
    } else {
      files.push(file);
    }
  });
  finder.on("end", () => resolve(files));
  finder.on("error", reject);
}));

const filesToRoutes = (files: string[] = []): Record<string, string> => files.reduce((acc, file) => {
  acc[file] = file.replace(path.dirname(apiDir), "").replace(/\.[\w\d]+$/, "");
  return acc;
}, {});

function addCompatibleRoute(app: Express, handler: Handler, path: string) {
  if (typeof handler === "function") {
    addRoute(app, "get", path, handler);
  }

  if (Array.isArray(handler)) {
    handler.forEach((route) =>
      addRoute(app, route.method, route.path || path, route.handler));
  }

  if (typeof handler === "object") {
    const methods = Object.keys(handler) as AllowedHttpMethods[];
    methods.forEach((method) =>
      addRoute(app, method, path, handler[method]));
  }
}

function addRoute(app: Express, method: AllowedHttpMethods, path: string, handler: RequestHandler) {
  if (isAllowedHttpMethod(method)) {
    if (typeof handler === "function") {
      return app[method](path, handler);
    }
    throw new Error(`Handler is not a function for route "${method} ${path}"`);
  }
  throw new Error(`Unexpected method "${method}" for route "${path}"`);
}

async function run () {
  const app = express();
  app.use(express.static("public"));

  const files = await findFiles(apiDir);
  const routes = filesToRoutes(files);

  Object.keys(routes).forEach((file) => {
    const path = routes[file];
    const exported = require(file);
    const handler: Handler = exported.default ?? exported;
    addCompatibleRoute(app, handler, path);
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
  });
}

run().catch(console.error);
