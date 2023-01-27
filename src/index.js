
//Принимаем за основу открытые и закрытые скобки
//открытые скобки
const OPEN_BRACKETS = ['(', '{', '|', '1', '3', '5', '7', '8'];
//соответствующие закрытые скобки
const BRACKETS_PAIR = {
   [')']: '(',
   ['}']: '{',
   ['|']: '|',
   ['2']: '1',
   ['4']: '3',
   ['6']: '5',
   ['7']: '7',
   ['8']: '8',
}
let stack = [];
module.exports = function check(str, bracketsConfig) {
   let count = 0;

   for (let i = 0; i < str.length; i++) {

      if (str[i] == '(' || str[i] == '{' || str[i] == '|' || str[i] == '1' || str[i] == '3' || str[i] == '5' || str[i] == '7' || str[i] == '8') {
         count++;
      }

      if (str[i] == ')' || str[i] == '}' || str[i] == '|' || str[i] == '2' || str[i] == '4' || str[i] == '6' || str[i] == '7' || str[i] == '8') {
         count--;
      }

      if (count < 0) {
         break;
      }
   }

   if (count != 0) {
      return false;
   } else {
      return true;
   }

}
