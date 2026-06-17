const words = [
    'Web Developer',
    'Cybersecurity Enthusiast',
    'AI Learner'
];

let i = 0;
let j = 0;
let current = '';
let isDeleting = false;

function type() {

    current = words[i];

    document.getElementById('typing').textContent =
        current.substring(0, j);

    if (!isDeleting && j < current.length) {

        j++;

    } else if (isDeleting && j > 0) {

        j--;

    } else {

        isDeleting = !isDeleting;

        if (!isDeleting) {
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();

window.addEventListener('scroll', () => {

    document.querySelectorAll('.reveal').forEach(el => {

        if (el.getBoundingClientRect().top <
            window.innerHeight - 100) {

            el.classList.add('active');
        }
    });

});

document.addEventListener('mousemove', (e) => {

    const glow = document.querySelector('.cursor-glow');

    glow.style.left = (e.clientX - 150) + 'px';
    glow.style.top = (e.clientY - 150) + 'px';

});