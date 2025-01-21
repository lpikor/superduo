const links = document.querySelectorAll('a[href^="#"]')


links.forEach(link => {
    link.addEventListener('click', function (e) {
        console.log('click');
        e.preventDefault();

        const href = this.getAttribute('href');

        const target = document.querySelector(href);

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const showMore = document.querySelectorAll('.show-more')

showMore.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const list = this.parentElement.querySelector('.show-more-list')

        if (list.classList.contains !== 'active') {
            list.style.display = 'flex'
            list.classList.add('active')
            
            link.style.display = 'none'
        } else {
            list.style.display = 'none'
        }
    })
})

AOS.init({
    duration: 1000,
    once: true,
});