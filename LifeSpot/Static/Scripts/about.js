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

function getReview() {

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

const setReview = review => {

    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {
        likeCounter += `<b style="color: chocolate">Рейтинг:${review.rate}</b>`;
    }

    document.getElementsByClassName('reviews')[0].innerHTML +=
        `<div class=\"review-text\"><p><b>${review.userName}</b>  ${review.date} ${likeCounter}</p><p>${review.comment}</p></div>`;
}