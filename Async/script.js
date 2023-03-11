let timer = document.querySelector('#timer')
let head = document.querySelector('#head')
let img = document.querySelector('#img')
let counter = 100

setInterval(function () {
    counter--
    timer.innerHTML = counter
    if (counter === 0) {
        head.remove()
        img.classList.remove("d-none")
        img.classList.add("d-block")
    }
}, 1000)
