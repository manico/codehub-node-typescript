"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Http_1 = require("../Http");
class Articles {
    constructor(clientOptions) {
        this.client = new Http_1.HttpClient(clientOptions);
    }
    getArticle(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const articles = yield this.client.get('/data/articles.json');
                return new Http_1.HttpResponse(articles[0]);
            }
            catch (error) {
                return new Http_1.HttpException(error.response.status, error.response.message, []);
            }
        });
    }
}
exports.Articles = Articles;
//# sourceMappingURL=Article.js.map