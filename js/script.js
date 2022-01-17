"use strict"


const clientForm = document.forms.clientForm;

const clientSurname = clientForm.surname;
const clientName = clientForm.name;
const clientSecondName = clientForm.secondName;

const clientBirthDate = clientForm.birthDate;
const clientPhone = clientForm.phone;

const clientGroup = clientForm.clientGroup;
const clientDoctor = clientForm.doctor;

const addressIndex = clientForm.index;
const addressCountry = clientForm.country;
const addressRegion = clientForm.region;
const addressTown = clientForm.town;
const addressStreet = clientForm.street;
const addressHouse = clientForm.house;

const passport = clientForm.passport;
const passportSeries = clientForm.series;
const passportNumber = clientForm.number;
const passportIssued = clientForm.issued;
const passportIssueDate = clientForm.issueDate;

console.log(passport.value);


clientForm.addEventListener("submit", function (event) {
    if (!clientSurname.value || !clientName.value || !clientPhone.value 
        || !addressTown.value || !passportIssueDate.value || !clientBirthDate.value
        || !clientGroup.value || !passport.value) {
        console.log("поле не заполнено");
        event.preventDefault();
    } else {
        console.log("новый клиент создан всплывающее окно");
    }
});
