const divAnimation = {
    targets: '#single',
    backgroundColor: 'hsl(200, 80%, 80%)',
    borderRadius: '50%',
    translateX: window.innerWidth-300,
    rotate: 360,
    duration: 2000,
    direction: 'alternate',
    easing: 'easeInSine',
    loop: true,
    autoplay: false
}


const singleAnimationObj = anime(divAnimation);
console.log(singleAnimationObj);

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');

playBtn.addEventListener('click', singleAnimationObj.play);
pauseBtn.addEventListener('click', singleAnimationObj.pause)


const staggerAnimation = {
    targets: '#container div',
    translateY: '250px',
    easing: 'easeOutQuad',
    delay: anime.stagger(1000),
    direction: 'alternate',
    loop: true
}

anime(staggerAnimation)

// gör så att den loopar
// att den går fram och tillbaka
// lägg till minst en till css-egensap att animera