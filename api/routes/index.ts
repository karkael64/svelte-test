import { RouteDefinition } from "../types/routes";
import { default as dateHandlers } from "./date";

export default [...dateHandlers] as RouteDefinition[];
