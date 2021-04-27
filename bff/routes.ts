import { RouteDefinition } from "./types/routes";
import { default as dateHandlers } from "./handlers/date";
import { default as userHandlers } from "./handlers/user";

export default [...dateHandlers, ...userHandlers] as RouteDefinition[];
