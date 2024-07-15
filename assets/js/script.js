const transformProject = () => {

    const container = document.getElementsByClassName('container');
    const el = document.getElementsByClassName("transformProject");
    
    anime({
        targets: el,
        translateX: [0, 600],
        opacity: [1, 0],
        easing: 'easeInOutSine',
        duration: 200
    });
}
