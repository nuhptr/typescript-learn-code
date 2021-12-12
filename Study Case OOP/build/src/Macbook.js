"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLaptop_1 = __importDefault(require("./module/BaseLaptop"));
class Macbook extends BaseLaptop_1.default {
    constructor(type, numeric, touchButton) {
        super("Macbook", type, numeric, touchButton);
        this.type = type;
        this.numeric = numeric;
        this.touchButton = touchButton;
    }
}
exports.default = Macbook;
