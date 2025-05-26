let elements = document.getElementsByTagName('*');
alert(`Количество элементов на странице:  ${elements.length}`);

function saveInputHistory() {
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    // Покажем окно с прошлым и новым значением
    //равноценно window.lastInput, так как мы работаем в контексте браузера
    alert('Последний ввод: ' + this.lastInput + '\n' + 'Текущий ввод: ' + currentInput);

    this.lastInput = currentInput;
}