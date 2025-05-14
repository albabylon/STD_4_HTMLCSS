
function getReview() {

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

const setReview = review => {

    document.getElementsByClassName('reviews')[0].innerHTML +=
        `<div class=\"review-text\"><p><b>${review.userName}</b>  ${review.date}</p><p>${review.comment}</p></div>`;
}