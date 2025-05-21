let user = {
  name: 'Іван',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log("Кількість властивостей:", count(user));