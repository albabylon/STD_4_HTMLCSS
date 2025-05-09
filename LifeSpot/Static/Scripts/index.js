function handleSession() {

    let userInfo = new Map();
    let userAgent = window.navigator.userAgent;
    userInfo.set('userAgent', userAgent);

    let age = prompt("Укажите сколько вам лет");
    userInfo.set('age', age);

    if (age >= 18) {

        let startDate = new Date().toLocaleString();
        userInfo.set('startDate', startDate);

        alert("Приветствуем на LifeSpot. Время входа:\n" + startDate);
    }
    else {
        alert("Сайт предназначен для лиц старше 18 лет");
        window.location.href = "http://www.google.com"
    }

    for (let info of userInfo) {
        console.log(info);
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