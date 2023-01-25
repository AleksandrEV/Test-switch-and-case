/*
var a = 4;
var b = a + 2;

switch (b) {
   case 3:document.write('<h2>b = 3</h2>');
      break;
   case 4:document.write('<h2>b = 4</h2>');
      break;
   case 5:document.write('<h2>b = 5</h2>');
      break;

   default:document.write('<h2>not found</h2>')
      break;
};
*/
const tegh1 = document.querySelector('.tegh1');

function color(obj) {

   switch (obj.value) {
      case 'Черный': 
         tegh1.style.color = 'black';
         break;

      case 'Зеленый':
         tegh1.style.color = 'green';
         break;

      case 'Красный': 
         tegh1.style.color = 'red';;
         break;

      case 'Белый': 
         tegh1.style.color = 'white';
         tegh1.style.backgroundColor = 'black';
         break;

      default: console.log('not found')
      break;
   }
};
