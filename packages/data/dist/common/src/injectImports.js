"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("types");
const syntax_1 = require("./syntax");
function injectImports(source, isTypeOnly = false) {
    const paths = Object.entries(source);
    const t = isTypeOnly ? "import type" : "import";
    return paths.map(([path, value]) => {
        syntax_1.shouldBeResolvePath(path);
        if (types_1.isString(value)) {
            return `${t} ${syntax_1.shouldBeVariableName(value)} from "${path}"`;
        }
        if (types_1.isArray(value) && value.length) {
            return `${t} { ${value
                .map((sub) => {
                if (types_1.isString(sub)) {
                    return syntax_1.shouldBeVariableName(sub);
                }
                if (types_1.isObject(sub)) {
                    const firstKey = Object.keys(sub)[0];
                    return `${syntax_1.shouldBeVariableName(firstKey)} as ${syntax_1.shouldBeVariableName(sub[firstKey])}`;
                }
            })
                .filter(types_1.isString)
                .join(", ")} } from "${path}";`;
        }
        if (types_1.isObject(value)) {
            if (types_1.isObject(value.type)) {
                return injectImports({ [path]: value.type }, true)[0];
            }
            if (value["*"]) {
                return `${t} * as ${syntax_1.shouldBeVariableName(value["*"])} from "${path}";`;
            }
            const subs = Object.entries(value);
            if (subs.length) {
                return `${t} { ${subs
                    .map(([name, alias]) => `${syntax_1.shouldBeVariableName(name)} as ${syntax_1.shouldBeVariableName(alias)}`)
                    .join(", ")} } from "${path}";`;
            }
        }
        return `${t} "${path}";`;
    });
}
exports.default = injectImports;
//# sourceMappingURL=injectImports.js.map