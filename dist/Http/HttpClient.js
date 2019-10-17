"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qs_1 = __importDefault(require("qs"));
const axios_1 = __importDefault(require("axios"));
const lodash_1 = require("lodash");
class HttpClient {
    constructor(options) {
        this.options = options;
        this.http = axios_1.default.create({
            baseURL: this.options.baseUrl,
            timeout: this.options.timeout,
        });
    }
    get(url, config) {
        return this.http.get(url, lodash_1.merge({
            paramsSerializer: (params) => {
                return qs_1.default.stringify(params, {
                    arrayFormat: 'brackets',
                    encodeValuesOnly: true,
                });
            },
        }, config));
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=HttpClient.js.map