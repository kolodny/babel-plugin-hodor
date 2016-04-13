export default function ({types: t}) {
  const hodorSymbol = Symbol();
  const hodor = path => {
    Object.keys(path.scope.bindings).forEach(binding => {
      const hoder = new Hodor();
      const bindings = path.scope.getAllBindings();
      let newHodor;
      do { newHodor = hoder.next() } while (bindings[newHodor]);
      path.scope.rename(binding, newHodor);

    });
  }
  const Hodor = (function() {
    const cached = [];
    const hodor = function *() {
      let i = -1;
      while (true) {
        let extraOs = i !== -1 ? (i++).toString(3).split('').map(c => ['o', 'O', '0'][c]).join('') : (i++, '');
        for (let d of ['d', 'D']) {
        for (let r of ['r', 'R']) {
        for (let o of ['o', 'O', '0']) {
        for (let o2 of ['o', 'O', '0']) {
        for (let h of ['h', 'H']) {
          yield h + o + d + o2 + extraOs + r;
        }}}}}
      }
    }();

    return class Hodor {
      constructor() {
        this.index = 0;
      }
      next() {
        if (!cached[this.index]) {
          cached[this.index] = hodor.next().value;
        }
        return cached[this.index++];
      }
    }

  })();

  return {
    visitor: {
      FunctionDeclaration: hodor,
      FunctionExpression: hodor,
      ArrowFunctionExpression: hodor,
      Identifier: hodor,
    }
  };


}
