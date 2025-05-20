//let session = {
//    userAgent: window.navigator.userAgent,
//    startDate: new Date().toLocaleString(),
//    userAge: prompt("Укажите сколько вам лет")
//}

function checkAge(newVisit) {

    if (window.sessionStorage.getItem("userAge") >= 18) {
        if(newVisit)
            alert("Приветствуем на LifeSpot. Время входа:\n" + session.age);
    }
    else {
        alert("Сайт предназначен для лиц старше 18 лет");
        window.location.href = "http://www.google.com"
    }

}

let sessionLog = function logSession() {

    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"))
    console.log('Возраст пользователя: : ' + window.sessionStorage.getItem("userAge"))
}

function handleSession(logger, checker) {

    // Проверяем дату захода и проставляем, если новый визит
    if (window.sessionStorage.getItem("startDate") == null)
        window.sessionStorage.setItem("startDate", new Date().toLocaleString());

    // Проверяем userAgent и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAgent") == null)
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent);

    // Проверяем возраст и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAge") == null) {

        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)

        // Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и при прохождении проверки на возраст он увидит приветствие
        checker(true)
    } else {

        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }

    // Вызываем переданную в качестве колл-бэка функцию логирования.
    logger()
}

function filtredInput(element) {

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