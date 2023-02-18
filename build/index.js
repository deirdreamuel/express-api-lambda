"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const app = (0, express_1.default)();
app.get("/", (_, res) => {
    res.json({ message: "hello from home!" });
});
app.get("/hello", (_, res) => {
    res.json({ message: "hello world!" });
});
if (!process.env.AWS_LAMBDA_RUNTIME_API) {
    app.listen(4000, () => {
        console.log("Starting server on port 4000...");
    });
}
exports.handler = (0, serverless_express_1.default)({ app });
