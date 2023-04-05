const showOrHideButton = document.querySelector('#btn');

showOrHideButton.addEventListener('click', () => { 
    const pEl = document.querySelector('#hidden');
    pEl.classList.toggle('p-escondido');
});