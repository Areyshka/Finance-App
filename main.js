const content = document.querySelector('.content');
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const themeToggle = document.getElementById("theme-toggle");
const date = document.querySelector(".date");
const card = document.querySelector(".card");
const cash = document.querySelector(".cash");
const incomeForm = document.getElementById("income-form");
const incomeMoney = document.getElementById("income-money");
const incomeCard = document.getElementById("income-card");
const incomeCash = document.getElementById("income-cash");
const expensesForm = document.getElementById("expenses-form");
const expensesMoney = document.getElementById("expenses-money");
const expensesCard = document.getElementById("expenses-card");
const expensesCash = document.getElementById("expenses-cash");
const select = document.getElementById("select");
const transactionBody = document.getElementById("transaction-table-body");


const categoryNames = {
    '1': 'Продукты',
    '2': 'Здоровье',
    '3': 'Покупки',
    '4': 'Одежда',
    '5': 'Семья',
    '6': 'Питомцы',
    '7': 'Досуг',
    '8': 'Кафе',
    '9': 'Подарки',
    '10': 'Транспорт',
    '11': 'Обслуживание машины',
    '12': 'Коммунальные платежи',
    '13': 'Образование',
    '14': 'Спорт',
    '15': 'Ремонт',
    '16': 'Уход за собой',
    '17': 'Путешествия',
    '18': 'Сбережения',
    '19': 'Долг',
    '20': 'Налоги',
    '21': 'Штрафы',
    '22': 'Благотворительность',
    '23': 'Другое'
};