document.body.addEventListener('mousemove', event =>{
    // console.log(event.clientY);

    const lightness = 100-100*(event.clientY/window.innerHeight);
    // const lightness = 100 - event.clientY/(window.innerHeight*0.01)
    // const lightness = 80 - event.clientY*0.1;

    document.body.style.backgroundColor = `hsl(200, 70%, ${lightness}%)`

    console.log()
})

// console.log(100*(clientY/window.innerHeight))