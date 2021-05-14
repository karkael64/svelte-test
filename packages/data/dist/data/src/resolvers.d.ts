/// <reference types="node" />
declare const _default: (request: import("http").IncomingMessage & {
    url: string;
}, response: import("http").ServerResponse & {
    json?: (data: unknown) => void;
}) => Promise<void>;
export default _default;
