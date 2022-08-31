const start = document.getElementById('bat')
const nav = document.getElementById('nav')

start.addEventListener('click', () => {
    nav.classList.toggle('active')
})

const search = document.querySelector('.search')
const btn = document.querySelector('.butt')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
