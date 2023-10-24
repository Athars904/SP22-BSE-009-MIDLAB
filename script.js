const s_cups = document.querySelectorAll('.cup-small')
const liter = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remaiming = document.getElementById('remained')
function cuphighlighter(idx) {
    if (idx===7 && s_cups[idx].classList.contains("full")) idx--;
    else if(s_cups[idx].classList.contains('full') && !s_cups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    s_cups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    Updatecup()
}
function Updatecup() {
    const f_cups = document.querySelectorAll('.cup-small.full').length
    const t_cups = s_cups.length

    if(f_cups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${f_cups / t_cups * 330}px`
        percentage.innerText = `${f_cups / t_cups * 100}%`
    }

    if(f_cups === t_cups) {
        remaiming.style.visibility = 'hidden'
        remaiming.style.height = 0
    } else {
        remaiming.style.visibility = 'visible'
        liter.innerText = `${2 - (250 * f_cups / 1000)}L`
    }
}

Updatecup()

s_cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => cuphighlighter(idx))
})

