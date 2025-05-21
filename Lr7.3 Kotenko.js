let user = { name: "Іван", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log("Ім'я:", name);
console.log("Вік:", age);
console.log("Адмін:", isAdmin);