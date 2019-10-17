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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const News_1 = require("./News");
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static('public'));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield News_1.newsService.getArticle(1);
    res.json(article);
}));
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is running on ${port}`);
});
//# sourceMappingURL=app.js.map