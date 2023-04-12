window.addEventListener('scroll', () => {
    document.body.style.setProperty(
        '--scroll-x',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
}, false);