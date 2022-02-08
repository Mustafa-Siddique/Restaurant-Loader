window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline({
        default: {
            ease: 'power2'
        }
    })

    TLLOAD
    .to('.image-container', {duration: 1.3, height: 400, delay: 0.4})
    .to('.block-txt', {duration: 0.6, height: 'auto'}, '-=0.8')
    .to('.block-txt h2', {y: 0}, '-=0.6')
    .to('.f2', {duration: 0.6, y: 0})
    .to('.flip-img1', {duration: 0, display: 'none'})
    .to('.f2', {duration: 0.6, y: '-100%'})
    .to('.load-container', {duration: 0.8, autoAlpha: 0, delay: 0.7})
    .add(() => {
        document.querySelector('video').play()
    }, '-=0.8')
    .add(() => {
        document.querySelector('.load-container').style.display= 'none'
    })
}