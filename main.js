/*
V konzoli prohlížeče si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

Vypište do konzole počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vyřízněte z názvu prvních pět písmen.
Vyřízněte z názvu posledních pět písmen.
*/


const title = "HarryPotter";

title.length
title.toUpperCase().slice(0, 5).slice(title.length - 5, title.length);

console.log(title.length);
console.log(title.toUpperCase());
console.log(title.slice(0, 5));
console.log(title.slice(title.length - 5, title.length));
