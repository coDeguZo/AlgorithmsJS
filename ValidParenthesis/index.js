function ValidParenthesis(s) {
  let stack = []
  let main = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[' ) {
          stack.push(s[i]);
      }
      else {
          let last = stack.pop();
          if (s[i] !== main[last]) {
            debugger
            return false};
      }
  }
      if (stack.length !== 0) {
        return false};
      

  return true;
};

ValidParenthesis("()(}")