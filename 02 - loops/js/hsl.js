for(let i=0; i<100; i++){
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    // h1.innerText = i;

    const hue = 230 + i*10;
    h1.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;

    h1.innerText = hue;

    const color = '#ff0000';
    h1.style.border = `solid ${color} 3px`
}