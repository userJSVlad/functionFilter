
let sumAllLetters = (russiansLetters, str, arr) => {
   arr = [];
   str = prompt('Напишите строчку', 'gvаpпtдfфёt');
   russiansLetters = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

   let newStr = str.split('');
   newStr.forEach(element => {
      russiansLetters.forEach(elem => {
         if (element === elem) {
            arr.push(elem);
         }
      });
   });
   return arr.length;
}

console.log(sumAllLetters());


/*
let sumAllLetters = (russiansLetters, str, arr) => {
   arr = [];
   str = prompt('Напишите строчку', 'gvpпtдfфqуt');
   russiansLetters = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

   let newStr = str.split('');
   newStr.filter(element => {
      russiansLetters.forEach(elem => {
         if (element === elem) {
            arr.push(elem);
         }
      });
   })
   return arr.length;
}

console.log(sumAllLetters());
*/

/*
let sumAllLetters = (russiansLetters, str) => {
   let arr = [];
   str = prompt('Напишите строчку', 'gvpпtдfфqуt');
   russiansLetters = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

   let newStr = str.split('');
   newStr.forEach((element) => {
      russiansLetters.reduce((val, elem) => {
         if (element === elem) {
            arr.push(elem)
         }
         return arr;
      }, []);
   })
   return arr.length;
}

console.log(sumAllLetters());

*/