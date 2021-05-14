import type { RouteDefinition } from "../types/routes";
import { default as userHandlers } from "./user/handler";

export const routes = [...userHandlers] as RouteDefinition[];
