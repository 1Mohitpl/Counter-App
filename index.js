let currentVal = 0;

const title = document.querySelector('#title')
const decrementBtn = document.querySelector('#decrement')
const resetBtn = document.querySelector('#Reset')
const incrementBtn = document.querySelector('#Increment')


incrementBtn.addEventListener('click', () => {
        currentVal ++;
        title.textContent = currentVal;
    
});

decrementBtn.addEventListener('click', () => {
    currentVal --;
    title.textContent = currentVal;

});


resetBtn.addEventListener('click', () => {
    currentVal = 0;
    title.textContent = currentVal;

});