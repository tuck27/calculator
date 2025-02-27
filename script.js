const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator_keys");

keys.addEventListener("click", e => {
    if (e.target.matches('button')) {
        //do something
    }
})


const display = document.querySelector('.calculator_display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
    }
    if (!action) {
        if (displayedNum === '0') {
            display.textContent = keyContent
        } else {
            display.textContent = displayedNum + keyContent
        }
    }
    if (action === 'decimal') {
        display.textContent = displayedNum + '.'
    }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        key.classList.add('is-depressed')
   
    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }
})
