const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Fade from Left

const fadersLeft = document.querySelectorAll('.fade-left');

const appearOnScrollLeft = new IntersectionObserver(function(
    entries,
    appearOnScrollLeft
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appearLeft');
            appearOnScrollLeft.unobserve(entry.target);
        }
    });
}, appearOptions);

fadersLeft.forEach(faderLeft => {
    appearOnScrollLeft.observe(faderLeft);
})

// Slide in

const sliders = document.querySelectorAll('.slide-in');

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
