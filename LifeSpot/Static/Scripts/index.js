let session = new Map();

function handleSession() {

    let userAgent = window.navigator.userAgent;
    session.set('userAgent', userAgent);

    let startDate = new Date().toLocaleString();
    session.set('startDate', startDate);

}

function checkAge() {

    let age = prompt("Укажите сколько вам лет");
    session.set('age', age);

    if (age >= 18) {
        alert("Приветствуем на LifeSpot. Время входа:\n" + new Date().toLocaleString());
    }
    else {
        alert("Сайт предназначен для лиц старше 18 лет");
        window.location.href = "http://www.google.com"
    }

}

let sessionLog = function logSession() {

    for (let result of session) {
        console.log(result)
    }

}

function filtredInput(element) {

    //let enteredText = document.getElementsByTagName('input')[0].value.toLowerCase();
    let enteredText = element.value.toLowerCase();

    let videoElements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= videoElements.length; i++) {

        let videoText = videoElements[i].querySelector(".video-title").innerText;

        if (!videoText.toLowerCase().includes(enteredText.toLowerCase())) {
            videoElements[i].style.display = 'none';
        } else {
            videoElements[i].style.display = 'inline-block';
        }
    }
}