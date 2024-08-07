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

document.addEventListener('DOMContentLoaded', function () {

    // Создание объекта с кнопками
    const toggleButtons = {
        home1: document.getElementById("toggle-home1"),
        home2: document.getElementById("toggle-home2"),
        stat1: document.getElementById("toggle-stat1"),
        stat2: document.getElementById("toggle-stat2"),
        list1: document.getElementById("toggle-list1"),
        list2: document.getElementById("toggle-list2"),
        convert1: document.getElementById("toggle-convert1"),
        convert2: document.getElementById("toggle-convert2"),
    };

    // Создание объекта с элементами
    const elements = {
        money: document.getElementById("money-container"),
        forms: document.getElementById("forms-container"),
        income: document.getElementById("income-form"),
        expenses: document.getElementById("expenses-form"),
        tableContainer: document.getElementById("table-container"),
        table: document.getElementById("table"),
        transaction: this.getElementById("transaction-container"),
        convert: document.getElementById("converter-container"),
    };

    // Функция обновления видимости элементов
    function updateVisibility(activeElement) {
        // Определение, какие элементы должны быть видимы
        const visibility = {
            home: ["money", "forms", "income", "expenses"],
            stat: ["tableContainer", "table"],
            list: ["transaction"],
            convert: ["convert"],
        };

        // Обновление видимости элементов
        Object.keys(elements).forEach(element => {
            const elementType = visibility[activeElement];
            elements[element].classList.toggle('hidden', !elementType.includes(element));
        });

        // Обновление класса "active" для кнопок
        Object.keys(toggleButtons).forEach(toggleButton => {
            toggleButtons[toggleButton].classList.toggle('active', toggleButton.startsWith(activeElement))
        });
    }

    // Видимость по умолчанию
    updateVisibility("home");

    // Обработчики событий для кнопок
    toggleButtons.home1.addEventListener('click', () => updateVisibility('home'));
    toggleButtons.home2.addEventListener('click', () => updateVisibility('home'));
    toggleButtons.stat1.addEventListener('click', () => updateVisibility('stat'));
    toggleButtons.stat2.addEventListener('click', () => updateVisibility('stat'));
    toggleButtons.list1.addEventListener('click', () => updateVisibility('list'));
    toggleButtons.list2.addEventListener('click', () => updateVisibility('list'));
    toggleButtons.convert1.addEventListener('click', () => updateVisibility('convert'));
    toggleButtons.convert2.addEventListener('click', () => updateVisibility('convert'));
});


// Функция для установки темы
function setTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === "dark");
    moon.classList.toggle('hidden', theme === "dark");
    sun.classList.toggle('hidden', theme !== "dark");
}

// Инициализация состояния темы при загрузке страницы
const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
setTheme(currentTheme);

// Обработчик клика для переключения темы
themeToggle.addEventListener('click', function() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setTheme(isDarkMode ? 'light' : 'dark');
});

document.addEventListener('DOMContentLoaded', function() {

const sidebar = document.querySelector("aside");
const maxSidebar = document.querySelector(".max")
const miniSidebar = document.querySelector(".mini")
const maxToolbar = document.querySelector(".max-toolbar")
const menu = document.getElementById("menu")

// Функция для переключения бокового меню
function openNav() {
    // Активен ли сейчас мини сайдбар
    const isMiniSidebarVisible = sidebar.classList.contains('-translate-x-48');

    // Переключаем классы для бокового меню
    sidebar.classList.toggle('-translate-x-48', !isMiniSidebarVisible);
    sidebar.classList.toggle('translate-x-none', isMiniSidebarVisible);

    // Переключаем видимость элементов макси сайдбра
    maxSidebar.classList.toggle('hidden', !isMiniSidebarVisible);
    maxSidebar.classList.toggle('flex', isMiniSidebarVisible);

    // Переключаем видимость элементов мини сайдбара
    miniSidebar.classList.toggle('flex', !isMiniSidebarVisible);
    miniSidebar.classList.toggle('hidden', isMiniSidebarVisible);

    // Переключаем классы для тулбара
    maxToolbar.classList.toggle('translate-x-24', !isMiniSidebarVisible);
    maxToolbar.classList.toggle('scale-x-0', !isMiniSidebarVisible);
    maxToolbar.classList.toggle('translate-x-0', isMiniSidebarVisible);
}

// Привязка обработчика клика
menu.addEventListener('click', openNav);
});


// Функция для отображения даты и времени
function dateNow() {
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }
    let localDate = new Date().toLocaleDateString();
    let localTime = new Date().toLocaleTimeString([], options);
    date.innerText = `${localDate}\n${localTime}`;
}

setInterval(dateNow, 1000);
dateNow();


// Функция получения значения из localStorage
function getLocalStorage(key, defaultValue = 0) {
    return parseFloat(localStorage.getItem(key)) || defaultValue;
}

// Функция сохранения значения в localStorage
function setLocalStorage(key, value) {
    localStorage.setItem(key, value.toFixed(2));
}

// Функция для обновления денег
function updateMoney() {
    const moneyCard = getLocalStorage('card');
    const moneyCash = getLocalStorage('cash');
    card.textContent = moneyCard.toFixed(2);
    cash.textContent = moneyCash.toFixed(2);
}
updateMoney();

// Функция обработки доходов
function getIncome() {
    const incomeCount = parseFloat(incomeMoney.value);
    const typeMoney = incomeCard.checked ? "card" : "cash";
    const currentCount = getLocalStorage(typeMoney);
    setLocalStorage(typeMoney, incomeCount + currentCount);

    // Запись транзакции
    recordTransactions('Зачисление', '', incomeCount, typeMoney);
}

// Обработчик формы доходов
incomeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    getIncome();
    updateMoney();
    updateTable();
    updateTransactions();
    incomeForm.reset();
});


// Функция обработки расходов
function getExpenses() {
    const expensesCount = parseFloat(expensesMoney.value);
    const categoryNumber = select.value;
    const categoryName = categoryNames[categoryNumber];
    const typeMoney = expensesCard.checked ? "card" : "cash";

    if (categoryNumber) {
        let currentCount = getLocalStorage(typeMoney);
        if (currentCount >= expensesCount) {
        setLocalStorage(typeMoney, currentCount - expensesCount);
        updateCategoryExpense(categoryNumber, expensesCount);
        updateTable();
        // Запись транзакции
        recordTransactions('Списание', categoryName, expensesCount, typeMoney);
        updateTransactions();
    } else {
        alert ("Недостаточно средств.");
        }
    }
}

// Функция обновления таблицы
function updateTable() {
    // Массив всех категорий из выпадающего списка
    const categories = Array.from(select.options).map(option => option.value);
    // Общая сумма расходов для каждой категории
    const totalExpenses = calculateTotalExpenses(categories);
    document.getElementById("total").innerText = totalExpenses.toFixed(2);
    setLocalStorage('totalExpenses', totalExpenses)
    

    // Обновляем все данные по кадой категории
    categories.forEach(categoryNumber => {
    // Расходы по конкретной категории
    const value = getLocalStorage(`value-${categoryNumber}`);
    // Элементы html для отображения расходов, прогресс-бара, процентов категории
    const valueElement = document.getElementById(`value-${categoryNumber}`);
    const progressElement = document.getElementById(`progress-${categoryNumber}`);
    const percentElement = document.getElementById(`percent-${categoryNumber}`);

        if (valueElement) {
            valueElement.innerText = value === 0 ? '-' : value.toFixed(2);
        }

        if (progressElement) {
            const percentage = totalExpenses === 0 ? 0 : (value / totalExpenses) * 100;
            progressElement.value = percentage;
        }

        if (percentElement) {
            const percentage = totalExpenses === 0 ? 0 : (value / totalExpenses) * 100;
            percentElement.innerText = `${percentage.toFixed(1)}%`;
        }
    });

    updateMoney();
    expensesForm.reset();

}

// Функция рассчёта общей суммы расходов
function calculateTotalExpenses(categories) {
    return categories.reduce((total, category) => {
        return total + getLocalStorage(`value-${category}`);
    }, 0);
}

// Функция обновления расходов по категориям
function updateCategoryExpense(categoryNumber, expensesCount) {
    let selectedValue = getLocalStorage(`value-${categoryNumber}`);
    setLocalStorage(`value-${categoryNumber}`, selectedValue + expensesCount);
}


// Функция записи транзакций
function recordTransactions(type, categoryName, currentCount, typeMoney) {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const dateNew = new Date();
    // Объект транзакции с текущими данными
    const transaction = {
        date: dateNew.toLocaleDateString(),
        time: dateNew.toLocaleTimeString(),
        type: type,
        typeMoney: typeMoney,
        category: categoryName || "",
        count: currentCount.toFixed(2),
    };
    // Добавление новой транзакции в массив
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateTransactions();
}

// Функция для обновления таблицы транзакций
function updateTransactions() {
    // Очистка текущего содержимого таблицы
    transactionBody.innerHTML = '';
    // Массив из транзакций из localStorage
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Перебор всех транзакций и заполнение таблицы данными
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        
        // Создание ячеек для каждой строки
        const dateCell = document.createElement('td');
        dateCell.textContent = transaction.date;

        const timeCell = document.createElement('td');
        timeCell.textContent = transaction.time;

        const typeCell = document.createElement('td');
        typeCell.textContent = transaction.type;

        const methodCell = document.createElement('td');
        methodCell.textContent = transaction.typeMoney;

        const categoryCell = document.createElement('td');
        categoryCell.textContent = transaction.category; 

        const amountCell = document.createElement('td');
        amountCell.textContent = parseFloat(transaction.count).toFixed(2);

        // Добавление ячеек в строку
        row.appendChild(dateCell);
        row.appendChild(timeCell);
        row.appendChild(typeCell);
        row.appendChild(methodCell);
        row.appendChild(categoryCell);
        row.appendChild(amountCell);

        // Добавление строки в таблицу
        transactionBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateTransactions();
    updateTable();
});

document.addEventListener('DOMContentLoaded', function() {
    // Загрузка сохраненного значения общей суммы расходов
    const savedTotalExpenses = getLocalStorage('totalExpenses');
    if (savedTotalExpenses) {
        document.getElementById("total").innerText = savedTotalExpenses;
    }

    // Инициализация таблицы
    updateTable();
});

expensesForm.addEventListener('submit', function(event) {
    event.preventDefault();
    getExpenses();
    updateMoney();
    updateTable();
    updateTransactions();
    expensesForm.reset();
});

// Вызов функции для начального отображения данных
document.addEventListener('DOMContentLoaded', updateTransactions);