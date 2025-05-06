let age = prompt("Укажите сколько вам лет");
if (age >= 18) {
    alert("Приветствуем на LifeSpot " + new Date().toLocaleString());
}
else {
    alert("Сайт предназначен для лиц старше 18 лет");
    window.location.href = "http://www.google.com"
}

function handlInput(element) {

    let enteredText = document.getElementsByTagName('input')[0].value.toLowerCase();

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