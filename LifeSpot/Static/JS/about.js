function getReviewOld() {

    let review = {};

    review['userName'] = prompt('Введите Ваше имя:');
    if (review.userName == null)
        return;

    review['comment'] = prompt('Напишите отзыв:');
    if (review.comment == null)
        return;

    review['date'] = new Date().toLocaleString();

    setReview(review);
}

function getReviewOld2() {

    let review = {};

    review.userName = prompt('Введите Ваше имя:');
    if (review.userName == null)
        return;

    review.comment = prompt('Напишите отзыв:');
    if (review.comment == null)
        return;

    review.date = new Date().toLocaleString();

    let isLikable = confirm("Хоите, чтобы Ваш отзыв могли оценить другие?")

    if (isLikable) {

        let reviewWithFeedback = Object.create(review);
        reviewWithFeedback.rate = 0;

        setReview(reviewWithFeedback);
    } else {
        setReview(review)
    }
}

class Comment {
    constructor() {
        this.userName = prompt('Введите Ваше имя:');
        if (this.userName == null) {
            this.empty = true;
            return;
        }

        this.comment = prompt('Напишите отзыв:');
        if (this.comment == null) {
            this.empty = true;
            return;
        }

        this.date = new Date().toLocaleString();
    }
}

function addComment() {
    let comment = new Comment()

    if (comment.empty) {
        return;
    }

    let isLikable = confirm("Хоите, чтобы Ваш отзыв могли оценить другие?")

    if (isLikable) {

        let reviewWithFeedback = Object.create(comment);
        reviewWithFeedback.rate = 0;

        setReview(reviewWithFeedback);
    } else {
        setReview(comment)
    }
}

function addLike(id) {
    // Найдём нужный элемент по id
    let element = document.getElementById(id);

    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ')

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1;

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] = `${resultNum}`;

    // Обновим текст элемента
    element.innerText = array.join(' ');
}

const setReview = review => {

    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {

        // Генерим идентификатор комментария.
        let commentId = Math.random();

        // Для кнопки лайков добавляем: идентификатор, атрибут onclick для передачи идентификатора в функцию, значок лайка, 
        // и само значение счётчика отделяем пробелом
        // Также мы добавили стиль, чтобы кнопка смотрелась лучше и не имела рамок
        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }

    document.getElementsByClassName('reviews')[0].innerHTML +=
        `<div class=\"review-text\"><p><b>${review.userName}</b>  ${review.date} ${likeCounter}</p><p>${review.comment}</p></div>`;
}



class Slider {
    constructor(slider, slides, btnPrev, btnNext) {
        this.slider = document.querySelector('.slider');
        this.slides = document.getElementsByClassName('slide');
        this.btnPrev = document.querySelector('.prevBtn');
        this.btnNext = document.querySelector('.nextBtn');
        this.currentIndex = 0;

        this.init();
    }

    init() {
        this.btnPrev.addEventListener('click', () => this.slide(this.currentIndex - 1));
        this.btnNext.addEventListener('click', () => this.slide(this.currentIndex + 1));

        this.updatePosition();
    }

    slide(index) {
        const slideCount = this.slides.length;

        if (index < 0) {
            this.currentIndex = slideCount - 1;
        } else if (index >= slideCount) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = index;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.slider.style.transform = `translateX(${-this.currentIndex * 100}%)`;
    }
}

document.addEventListener('DOMContentLoaded', () =>  new Slider());