module.exports = function check(str, bracketsConfig) {
  const open = ['(', '{', '[', '|', '1', '3', '5', '7', '8'],
      close = [')', '}', ']', '|', '2', '4', '6', '7', '8'],
  stack =[];
  console.log(str);

  for(let i = 0; i < str.length; i++) {
    if ((str[i] === '|' || str[i] === '7' || str[i] === '8' ) && (close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1]))) {
      stack.pop();
    } else if((str[i] === '|' || str[i] === '7' || str[i] === '8') && str[i] === str[i+1]) {i++}
    else if(open.includes(str[i])) {
      stack.push(str[i]);
    } else {
      if(close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else return false;
    }
    console.log(stack);
  }

  

  return stack.length === 0;
  
}
