"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: `${process.env.VITE_FRONTEND_URL}` // Sua URL de frontend
}));
(0, database_1.default)();
app.use(express_1.default.json());
app.use('/api/auth', userRoutes_1.default);
// Exportando a função serverless que será chamada pelo Vercel
exports.default = (req, res) => {
    app(req, res); // Express processa a requisição
};
