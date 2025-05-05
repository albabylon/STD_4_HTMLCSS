let age = prompt("Укажите сколько вам лет");
if (age >= 18) {
    alert("Приветствуем на LifeSpot " + new Date().toLocaleString());
}
else {
    alert("Сайт предназначен для лиц старше 18 лет");
    window.location.href = "http://www.google.com"
}