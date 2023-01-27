
//Принимаем за основу открытые и закрытые скобки
//открытые скобки
const OPEN_BRACKETS = ['(', '{', '|', '[', '1', '3', '5', '7', '8'];
//соответствующие закрытые скобки
const BRACKETS_PAIR = {
   [')']: '(',
   ['}']: '{',
   ['|']: '|',
   [']']: '[',
   ['2']: '1',
   ['4']: '3',
   ['6']: '5',
   ['7']: '7',
   ['8']: '8',
}

module.exports = function check(str, bracketsConfig) {
   let stack = [];

   for (let i = 0; i < str.length; i++) {
      let currentBracket = str[i];


      if (OPEN_BRACKETS.includes(currentBracket)) { //
         if (stack[stack.length - 1] === currentBracket) {
            stack.pop();
         } else {
            stack.push(currentBracket);
         }
      } else {
         if (stack.length === 0) {
            return false;
         }


         if (BRACKETS_PAIR[currentBracket] === stack[stack.length - 1]) {
            stack.pop();
         } else {
            return false;
         }
      }
   }
   if (stack.length === 0) {
      return true;
   } else {
      return false;
   }

}

