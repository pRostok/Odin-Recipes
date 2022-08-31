const start = document.getElementById('bat')
const nav = document.getElementById('nav')
const ul = document.getElementById('ul')

start.addEventListener('click', () => {
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        setTimeout(() => ul.style.display = "flex", 400)
    } else {
        setTimeout(() => ul.style.display = "none", 500)
    }
    
    
    
})


const search = document.querySelector('.search')
const btn = document.querySelector('.butt')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

