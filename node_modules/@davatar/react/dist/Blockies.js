"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_blockies_1 = __importDefault(require("react-blockies"));
const styles = {
    container: {
        overflow: 'hidden',
    },
};
function Blockies({ address, size }) {
    return (react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.container), { width: size, height: size, borderRadius: size / 2 }) },
        react_1.default.createElement(react_blockies_1.default, { size: 8, seed: address, scale: size ? size / 7 : 4 })));
}
exports.default = Blockies;
//# sourceMappingURL=Blockies.js.map