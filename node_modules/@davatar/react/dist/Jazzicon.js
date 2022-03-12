"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(require("color"));
const mersenne_twister_1 = __importDefault(require("mersenne-twister"));
const react_1 = __importDefault(require("react"));
const colors = [
    '#01888C',
    '#FC7500',
    '#034F5D',
    '#F73F01',
    '#FC1960',
    '#C7144C',
    '#F3C100',
    '#1598F2',
    '#2465E1',
    '#F19E02', // gold
];
const wobble = 30;
const shapeCount = 3;
const styles = {
    container: {
        overflow: 'hidden',
    },
};
function Jazzicon({ address, size }) {
    const seed = parseInt(address.slice(2, 10), 16);
    const generator = new mersenne_twister_1.default(seed);
    const amount = generator.random() * 30 - wobble / 2;
    const localColors = colors.map(hex => new color_1.default(hex).rotate(amount).hex());
    const randomColor = () => {
        // carlos: This is necessary because the @metamask/jazzicon implementation includes
        // this mistake, which affects determinism.
        const _rand = generator.random();
        const idx = Math.floor(localColors.length * generator.random());
        return localColors.splice(idx, 1)[0];
    };
    const backgroundColor = randomColor();
    const shapes = Array(shapeCount)
        .fill(0)
        .map((_, index) => {
        const center = size / 2;
        const firstRot = generator.random();
        const angle = Math.PI * 2 * firstRot;
        const velocity = (size / shapeCount) * generator.random() + (index * size) / shapeCount;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        const secondRot = generator.random();
        const rot = firstRot * 360 + secondRot * 180;
        const fill = randomColor();
        return (react_1.default.createElement("rect", { key: `shape_${index}`, x: 0, y: 0, width: size, height: size, fill: fill, transform: `translate(${tx} ${ty}) rotate(${rot.toFixed(1)} ${center} ${center})` }));
    });
    return (react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.container), { width: size, height: size, backgroundColor, borderRadius: size / 2 }) },
        react_1.default.createElement("svg", { width: `${size}px`, height: `${size}px` }, shapes)));
}
exports.default = Jazzicon;
//# sourceMappingURL=Jazzicon.js.map