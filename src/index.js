
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
module.exports = function check(str, bracketsConfig) {
   let stack = [];

   //перебираем каждый элемент строки
   for (let i = 0; i < str.length; i++) {
      let currentBreacket = str[i];

      //делаем проверку, открывающая ли это стрелка. Если да, то добавляем её в стэк. Если нет, то скобка не добавляется в стэк. Т.к. нет открывающей скобки - это уже ошибка, поэтому возвращаем false
      if (OPEN_BRACKETS.includes(currentBreacket)) {
         stack.push(currentBreacket);
      } else {
         if (stack.length === 0) {
            return false;
         }

         //Находим последний элемент стека. Это нужно для того, чтобы проверить соответствует ли он паре. Если сообветствует, то мы элемент из стека удаляем т.к. найден ему соответствующий. Если нет, то последовательность неправильная и вернём false. 
         let lastEl = stack[stack.length - 1];

         if (BRACKETS_PAIR[currentBreacket] === lastEl) {
            stack.pop();
         } else {
            return false
         }

         //Проверяем наш стек, если он пуст, то все правильно и вернётся true, если нет, то 

         return stack.length === 0;

      }
   }
}
