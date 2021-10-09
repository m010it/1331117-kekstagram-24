//Фукнкция выполнена на основе материала https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

getRandomNumber();

function stringLength(string, maxLength) {
    if (string.length <= maxLength) {
      return true;
    }else {
      return false;
    }
}

stringLength();