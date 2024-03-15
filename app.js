const items = document.querySelectorAll(".header__item")
const back = document.getElementById("header")
const hinput = document.getElementById("header__input")
const clean = document.getElementById("clean")
const nicebutton = document.getElementById("nice__button")
const headCont = document.getElementById("header__container")

hinput.oninput = () => {
    let inp = (hinput.value).split(" ")
    if (inp.length % 2 == 0) {
        letelems = inp.filter(el => inp.indexOf(el) % 2 == 0)
        let arg = inp.filter(el => inp.indexOf(el) % 2 == 1)
        console.log(elems)
        elems.forEach((elem, index) => {
            if (elem <= items.length) {
                if (elem === "0") {
                    back.style.backgroundColor = arg[index]
                } else {
                    items[elem-1].style.backgroundColor = arg[index]
                }
            }
        })
    }
}

clean.onclick = () => {
    hinput.value = ""
}

nicebutton.onclick = () => {
    if (getComputedStyle(headCont).flexDirection == 'row') {
        headCont.style.flexDirection = "column"
        items.forEach(elem => elem.style.width = "100%")
        nicebutton.textContent = "Отхватить Польшу"
    } else if (getComputedStyle(headCont).flexDirection == 'column'){
        headCont.style.flexDirection = "row"
        items.forEach(elem => elem.style.width = "250px")
        nicebutton.textContent = "Захватить Польшу"
    }
}