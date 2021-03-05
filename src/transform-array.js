module.exports = function transform(arr) {
  if (!arr || Object.prototype.toString.call(arr) !== "[object Array]")
    throw new Error();
  const discardNextIndexs = [];
  const doubleNextIndexs = [];
  return arr.reduce((acc, cur, ind, arr) => {
    if (discardNextIndexs.includes(ind)) return acc;
    if (doubleNextIndexs.includes(ind)) {
      acc.push(cur, cur);
      return acc;
    }
    switch (cur) {
      case "--discard-prev":
        if (!discardNextIndexs.includes(ind - 1)) acc.splice(-1);
        break;
      case "--discard-next":
        discardNextIndexs.push(ind + 1);
        break;
      case "--double-prev":
        if (!discardNextIndexs.includes(ind - 1)) {
          const last = acc.slice(-1)[0];
          if (last !== undefined) acc.push(last);
        }
        break;
      case "--double-next":
        doubleNextIndexs.push(ind + 1);
        break;
      default:
        acc.push(cur);
        break;
    }
    return acc;
  }, []);
};
