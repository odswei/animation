var promiseEl = document.querySelector('#logo');
var promiseEl2 = document.querySelector('#logo .path');
var promiseEl3 = document.querySelector('#logo #logo-img');

function logFinished() {
    anime.set(promiseEl3, {
        src: '/img/hashtag.svg'
    })
    anime.set(promiseEl2, {
        fill: '#1C274C',
        stroke:'none'
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
        target: promiseEl,
        translateX: {
            value: '*=0.1', // 100px * 0.1 = '10px'
            duration: 1000
        },
    })
    .add({
        targets: promiseEl3,
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
    })
    .add({
        targets: promiseEl2,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 100 },
        direction: 'alternate',
    });

animation.finished.then(logFinished);
document.querySelector('#logo').onclick = function () {
    anime.set(promiseEl3, {
        src: '/img/hashtag-white.svg'
    })
    anime.set(promiseEl2, {
        fill: '',
        stroke: "#1C274C" 
    })
    animation.restart();
    animation.finished.then(logFinished);
}