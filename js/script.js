"use strict"

const clientForm = document.forms.clientForm;

// проверка пустых (обязательных) полей при отправке формы
const reqInput = document.querySelectorAll('.required');
const errorDescr = document.querySelectorAll('.error__descr');

clientForm.addEventListener("submit", function (event) {
    for (const item of reqInput) { 
        if (!item.value) {
            displayError(item, "Поле не заполнено");
            event.preventDefault();
        }
    }
    if (!validText(clientSurname) || !validText(clientName) || !validPhone()) {
        event.preventDefault();
    }
});
// проверка пустых (обязательных) полей при отправке формы

// функции вывод ошибки на экран: проверка пустого поля (потеря фокуса/фокус)
let message = "Обязательное поле";

function displayError(target, text) {
    target.classList.add('error');
    let errorDescr = target.nextElementSibling;
    errorDescr.innerHTML = text;
}
function removeError(target) {
    if (!target.error) {
        target.classList.remove('error');
        let errorDescr = target.nextElementSibling;
        errorDescr.innerHTML = "";
    }
}
// функции вывод ошибки на экран

// валидация символов
function validText(target) {
    return /^[a-zA-Zа-яА-Я\-]{3,20}$/.test(target.value);
}
// валидация символов

// фамилия
const clientSurname = clientForm.surname;

clientSurname.addEventListener("blur", function(event) {
    if (!clientSurname.value) { 
        displayError(clientSurname, "Обязательное поле");
    } else if (!validText(clientSurname)) {
        displayError(clientSurname, "Неверный формат записи");
    }
});
clientSurname.addEventListener("focus", function(event) {
    removeError(clientSurname);
});
// фамилия

// имя
const clientName = clientForm.name;

clientName.addEventListener("blur", function(event) {
    if (!clientName.value) { 
        displayError(clientName, "Обязательное поле");
    } else if (!validText(clientName)) {
        displayError(clientName, "Неверный формат записи");
    }
});
clientName.addEventListener("focus", function(event) {
    removeError(clientName);
});
// имя

// отчество
const clientSecondName = clientForm.secondName;
// отчество

// дата рождения
const clientBirthDate = clientForm.birthDate;

clientBirthDate.addEventListener("blur", function(event) {
    if (!clientBirthDate.value) { 
        displayError(clientBirthDate, "Обязательное поле");
    }
});
clientBirthDate.addEventListener("focus", function(event) {
    removeError(clientBirthDate);
});
// дата рождения

// телефон
const clientPhone = clientForm.phone;

clientPhone.addEventListener("blur", function (event) {
    if (!validPhone()) { 
        displayError(clientPhone, 'Не верный номер');
    }
});

function validPhone() {
    let phone = clientPhone.value.split(' ').join('');
    let cnt = phone.length;
    return ((cnt == 11 && phone.startsWith('7') || cnt == 12 && phone.startsWith('+7')) && isFinite(phone));
}
// телефон

// группа клиентов
const clientGroup = clientForm.clientGroup;

clientGroup.addEventListener("blur", function(event) {
    if (!clientGroup.value) { 
        displayError(clientGroup, "Обязательное поле");
    }
});
clientGroup.addEventListener("focus", function(event) {
    removeError(clientGroup);
});
// группа клиентов

// врач
const clientDoctor = clientForm.doctor;
// врач

//адрес
const addressIndex = clientForm.index;
const addressCountry = clientForm.country;
const addressRegion = clientForm.region;

//город
const addressTown = clientForm.town;

addressTown.addEventListener("blur", function(event) {
    if (!addressTown.value) { 
        displayError(addressTown, "Обязательное поле");
    }
});
addressTown.addEventListener("focus", function(event) {
    removeError(addressTown);
});
//город

const addressStreet = clientForm.street;
const addressHouse = clientForm.house;
//адрес

//документ
const passport = clientForm.passport;

passport.addEventListener("blur", function(event) {
    if (!passport.value) { 
        displayError(passport, "Обязательное поле");
    }
});
passport.addEventListener("focus", function(event) {
    removeError(passport);
});
//документ

const passportSeries = clientForm.series;
const passportNumber = clientForm.number;
const passportIssued = clientForm.issued;

//дата выдачи
const passportIssueDate = clientForm.issueDate;

passportIssueDate.addEventListener("blur", function(event) {
    if (!passportIssueDate.value) { 
        displayError(passportIssueDate, "Обязательное поле");
    }
});
passportIssueDate.addEventListener("focus", function(event) {
    removeError(passportIssueDate);
});
//дата выдачи