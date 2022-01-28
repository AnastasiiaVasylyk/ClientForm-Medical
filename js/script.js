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


clientPhone.addEventListener("blur", function (event) {

    validTel();

});

function validTel() {
    if (clientPhone.value.split(' ').join('').length == 11 && 
    isFinite(clientPhone.value.split(' ').join(''))) {
        console.log('номер ok');
    } else if (clientPhone.value.startsWith('+') && 
    clientPhone.value.split(' ').join('').length == 12 && 
    isFinite(clientPhone.value.split(' ').join(''))) {
        console.log('номер ok +');
    } else {
        clientPhone.classList.add('error')
        clientPhone.insertAdjacentHTML('afterend',
        '<div class="error__descr">Не верный номер</div>');
        clientPhone.addEventListener("focus", function (e) {
            if ( document.querySelector('.error__descr') ) {
                document.querySelector('.error__descr').remove();
            }
            clientPhone.classList.remove('error');
        });
    }
}

clientForm.addEventListener("submit", function (event) {
    if (!clientSurname.value || !clientName.value || !clientPhone.value 
        || !addressTown.value || !passportIssueDate.value || !clientBirthDate.value
        || !clientGroup.value || !passport.value) {
        console.log("поле не заполнено");
        event.preventDefault();
    } else {
        alert('Новый клиент создан!');
    }
});
