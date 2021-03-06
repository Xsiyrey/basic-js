const chainMaker = {
  getLength() {
    return this.elements && this.elements.length ? this.elements.length : 0;
  },
  addLink(value) {
    if (this.elements) this.elements.push(value);
    else this.elements = [value];
    return this;
  },
  removeLink(position) {
    if (!position || position % 1 !== 0) {
      this.elements = undefined;
      throw new Error();
    }
    if (this.elements) this.elements.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if (this.elements) this.elements = this.elements.reverse();
    return this;
  },
  finishChain() {
    let result = this.elements.map((x) => `( ${x} )`).join("~~");
    this.elements = undefined;
    return result;
  },
};

module.exports = chainMaker;
