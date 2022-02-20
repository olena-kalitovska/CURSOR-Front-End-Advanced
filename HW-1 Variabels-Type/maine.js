'use strict'
// Виведення максимального числа
const arr = [15.678, 123.965, 90.2345];
Math.max.apply(null, arr);
Math.max(...[15.678, 123.965, 90.2345]);
console.log('Максимальне:',Math.max(...[15.678, 123.965, 90.2345]));
// Виведення мінімального числа
Math.min.apply(null, arr);
Math.min(...[15.678, 123.965, 90.2345]);
console.log('Мінімальне число:',Math.min(...[15.678, 123.965, 90.2345]));
//Скласти вартість всіх товарів, помістити їх в змінну та виведіть цю суму.
const tangerines = 15.678;
const huarma = 123.965;
const garnet = 90.2345;
const theAmountOfFoodFull = tangerines + huarma + garnet;
console.log('Сума всіх товарів:', theAmountOfFoodFull );
//Відкиньте копійки у всіх товарів, потім-складіть цілу частину вартості кожного товару між собою. Округлення використовувати в меншу сторону.
Math.floor(tangerines);
Math.floor(huarma);
Math.floor(garnet);
const theAmountOfFood = Math.floor(tangerines) + Math.floor(huarma) + Math.floor(garnet);
console.log('Сума цілих частин вартості товарів(округлення до меншого):',theAmountOfFood);
//Вивести суму товарів округлену до сотень.
const theAmountOfFoodFixed = tangerines + huarma + garnet;
theAmountOfFood.toFixed(3);
console.log('Сума вартості товарів(округлення до сотень):',theAmountOfFoodFixed.toFixed(3));
//Вивести булеве значення: Чи є сума всіх товарів(округлена в меншу сторону) паргим чи не парним числом?
const theAmountOfFoodAll = Math.floor(theAmountOfFoodFull);
console.log('Булеве значення суми вартості товарів(округлення в меншу сторну:',theAmountOfFoodAll % 2 === 0);
//Вивести суму решти, при оплаті всіх товарі( без округлень), якщо клієнт платить 500 грн.
const CLIENTS_PAY = 500;
const clientsDelivery = CLIENTS_PAY - theAmountOfFoodFull;
console.log('Решта клієнта, від 500 грн, при оплаті за всі товари:',clientsDelivery);
//Вивести середнє значення цін, окркглене до другого знаку після коми.
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
};
let result = sum / arr.length;
console.log('Середнє значення цін:',result.toFixed(2));
//Створити змінну в якій зберегти випадкову знижку(використовуючи функцію Math.random)
                             //discount = from 10% to 100%;
Math.random() * (100 - 10) + 10;
//Зробити клієнту випадкову знижку та виввести суму до оплати округлену до 2 знаків після коми.
const clientBuyATangerines = 15.678;
const clientReceiveDiscount = Math.random() * (100 - 10) + 10;
const amountDue = clientBuyATangerines * (clientReceiveDiscount / 100);
console.log('Сума до оплати(округлення до 2 знаків) після рандомної знижки:',amountDue.toFixed(2));
//Вивести чистий прибуток, якщо клієнт заплатить зі знижкою та собівартість товарів рівно в два рази нижче їх цін.
//TANDERINES
const amountDueTanderines = tangerines * (clientReceiveDiscount / 100);
const costOfTanderince = tangerines / 2;
const netProfitTanderince = costOfTanderince - amountDueTanderines;
console.log('Чистий дохід мандарини (знижка рандомна):',netProfitTanderince);
//HUARMA
const amoutDueHuarma = huarma * (clientReceiveDiscount / 100);
const costOfHuarma = huarma / 2;
const netProfitHuarma = costOfHuarma - amoutDueHuarma;
console.log('Чистий дохід хурма (знижка рандомна):',netProfitHuarma);
//GARNET
const amountDueGarnet = garnet * (clientReceiveDiscount / 100);
const costOfGranet = garnet / 2;
const netProfitGarnet = costOfGranet - amountDueGarnet;
console.log('Чистий дохід гранат (знижка рандомна):',netProfitGarnet)


