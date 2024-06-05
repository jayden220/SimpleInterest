let initial = document.getElementsByClassName('amount')[0]
let rate = document.querySelector('.rate')
let years = document.querySelector('.years')
let answer = document.getElementsByClassName('final')[0]
let calc = document.getElementsByTagName('button')[0]       

function simpleInt() {
    let i = initial.value
    let r = rate.value
    let y = years.value

    let final = (i * r * y) / 100
    let result = final.toFixed(2)
    answer.innerText = result
}
calc.addEventListener('click', simpleInt)