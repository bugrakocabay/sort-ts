"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const chars = this.data.split('');
        const temp = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = temp;
        this.data = chars.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
