var promiseEl = document.querySelector('#logo');
var promiseEl2 = document.querySelector('#logo span');
var promiseEl3 = document.querySelector('#logo img');

function logFinished() {
    anime.set(promiseEl2, {
        display: 'inline'
    })
    anime.set(promiseEl3, {
        src: '/img/hashtag.svg'
    })
}

var animation = anime.timeline({
    targets: promiseEl,
    delay: 300,
    duration: 500,
    endDelay: 200,
    easing: 'easeInOutSine',
})
    .add({
        translateX: 250
    })
    .add({
        targets: promiseEl3,
        width: '75px',
        height: '75px'
    })
    .add({
        translateX: {
            value: '*=0.1', // 100px * 0.1 = '10px'
            duration: 1000
        },
        width: {
            value: '-=20px', // 28 - 20 = '8px'
            duration: 1800,
            easing: 'easeInOutSine'
        },
        rotate: {
            value: '+=2turn', // 0 + 2 = '2turn'
            duration: 1800,
            easing: 'easeInOutSine'
        },
        direction: 'alternate'
    });

animation.finished.then(logFinished);
document.querySelector('#logo').onclick = function () {
    anime.set(promiseEl2, {
        display: 'none'
    })
    anime.set(promiseEl3, {
        src: '/img/hashtag-white.svg'
    })
    animation.play();
    animation.finished.then(logFinished);
}