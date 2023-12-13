const keyframeAnimation = {
    targets: '#single',
    keyframes:[
        {translateX: 300, easing: 'linear'},
        {borderRadius: '50%', easing: 'easeInQuart'},
        {translateX: 100, translateY: 100, borderRadius: '0%'}, 
        {borderTop: '3px solid black'},
        {borderRight: '3px solid black'},
        {borderBottom: '3px solid black'},
        {borderLeft: '3px solid black'},
    ],
    duration: 5000
}

// anime(keyframeAnimation);


const keyframeAnimation2 = {
    targets: '#single',
    translateX: [
        {value: 500, duration: 1000, easing: 'easeOutSine'},
        {value: 300, duration: 200, easing: 'easeInSine'},
    ],
    translateY: [
        {value: 200, duration: 500, easing: 'easeOutSine'},
        {value: 300, duration: 600, easing: 'easeOutSine'},
    ],
    backgroundColor: [
        {value: 'hsl(200, 80%, 80%)', duration: 200, delay: 1000, easing: 'easeOutQuint'}
    ]
}

anime(keyframeAnimation2);