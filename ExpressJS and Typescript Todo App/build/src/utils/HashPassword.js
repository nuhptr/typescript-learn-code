"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class PasswordHash {
}
PasswordHash.hash = (password) => {
    return bcrypt_1.default.hash(password, 10);
};
// TODO: setiap selesai membuat 
exports.default = PasswordHash;
