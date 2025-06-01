//Навигация и классификация узлов

//Узлы делятся на дочерние и родительские

//ParentNodes
//parentNode - для всех узлов
//parentElement - только для узлов-элементов

//ChildNodes
//childNodes(дочерние узлы) — элементы, которые лежат непосредственно внутри того элемента, к которому обращаются (неглубокая вложенность)
//children(потомки) — все элементы, которые лежат внутри тега, включая вложенные в другие теги: body, div, ul, li, b для HTML.

//childNode, firstChild, lastChild - для всех узлов
//children, firstElementChild, lastElementChild - только для узлов-элементов


//Обратиться к родительскому свойству можно через parentElement или parentNode.
//Они оба возвращают родителя.Но есть небольшой нюанс:
//parentElement вернёт узел-элемент,
//parentNode — любого родителя.

document.documentElement.parentNode === document
document.documentElement.parentElement === null


//Свойства firstChild и lastChild обеспечивают быстрый доступ к первому и последнему дочернему элементу из списка childNodes.
elem.hasChildNodes() //проверить, существуют ли вообще дочерние узлы


//Siblings (соседи) — узлы, у которых один и тот же родитель.
//Правый (следующий) узел — nextSibling.
//Левый(предыдущий) узел — previousSibling.
//Родитель — parentNode
//previousSibling, nextSibling - для всех узлов:
//previousElementSibling, nextElementSibling - только для узлов-элементов:


//1 Поиск элемента в DOM
document.getElementById(id)
document.getElementsByTagName(tagName)
document.getElementsByClassName(className)
document.querySelector(selector) //По любому CSS-селектору (. — класс, # — id, отсутствие — имя тега
document.querySelectorAll(selector) //По любому CSS-селектору (. — класс, # — id, отсутствие — имя тега

//2 Изменение элементов в DOM
elem.innerHTML = "content" //Вставка любого контента напрямую
//Прежде чем вставлять контент, необходимо найти элемент, используя специальные функции, например так: document.getElementById(id)

elem.setAttribute(attr, value) //Вставка/изменение атрибута
//Принимает название атрибута как строку и значение для этого атрибута тоже как строку

elem.style.property = "style" //Добавление стиля
elem.style = "font-size: 20px; color: red"
elem.style.color = "red";

//3 Добавление и удаление элементов в DOM

//Добавление элемента
document.createElement(elem) 

const customDiv = document.createElement("div"); //Создаём элемент
customDiv.innerHTML = "<span id="custom">Привет!</span>"; //Заполняем его (альтернатива document.createElement(elem))
const parent = document.getElementById("id"); //Ищем родительский элемент
document.body.insertBefore(customDiv, parent); //Добавляем созданный элемент в дерево DOM (добавляем до)

//или через шаблонную строку
const content = "Привет!"
const parent = document.getElementById("id");
parent.innerHTML = `<div><span id="custom">${content}</span></div>`;

insertAdjacentHTML() //разбирает указанный текст как HTML или XML и вставляет полученные узлы(nodes) в DOM - дерево в указанную позицию.
//Данная функция не переписывает имеющиеся элементы.
//Принимает как аргументы строки — position и контент
//'beforebegin': до самого element(до открывающего тега);
//'afterbegin': сразу после открывающего тега element(перед первым потомком);
//'beforeend': сразу перед закрывающим тегом element(после последнего потомка);
//'afterend': после element(после закрывающего тега).

const parent = document.getElementById("id");
parent.insertAdjacentHTML('afterend', `<div><span id="custom"> ${content}</span></div>`);

//Удаление элемента
elem.removeChild(child)

const removed = document.getElementById("custom");
const div = document.querySelector("div");
div.removeChild(removed);



