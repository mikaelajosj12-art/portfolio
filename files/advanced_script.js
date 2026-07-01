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

document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const group = button.closest('.accordion-group');
        const targetId = button.getAttribute('data-target');
        const targetPanel = document.getElementById(targetId);
        const groupName = button.getAttribute('data-group');
        const isOpen = group.classList.contains('active');

        document.querySelectorAll(`.accordion-group [data-group="${groupName}"]`).forEach(otherButton => {
            const otherGroup = otherButton.closest('.accordion-group');
            const otherPanel = document.getElementById(otherButton.getAttribute('data-target'));

            if (otherButton !== button) {
                otherGroup.classList.remove('active');
                otherPanel.classList.remove('active');
                otherButton.setAttribute('aria-expanded', 'false');
            }
        });

        group.classList.toggle('active', !isOpen);
        targetPanel.classList.toggle('active', !isOpen);
        button.setAttribute('aria-expanded', String(!isOpen));
    });
});

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