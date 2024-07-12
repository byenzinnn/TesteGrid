const animeStart = () => {
    anime({
        targets: '.name-title',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 1000
    })
    anime({
        targets: '.bar',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 600,
        delay: 500
    })
    anime({
        targets: '.nav-link',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 600,
        delay: anime.stagger(100, {start: 500})
    })
}