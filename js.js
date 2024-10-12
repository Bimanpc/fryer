let friedPotatoes = 0;

const fryButton = document.getElementById('fry-btn');
const scoreDisplay = document.getElementById('score');
const potato = document.getElementById('potato');

fryButton.addEventListener('click', () => {
    friedPotatoes++;
    scoreDisplay.textContent = friedPotatoes;
    potato.classList.add('fried');

    setTimeout(() => {
        potato.classList.remove('fried');
    }, 300); // Reset potato back after 300ms
});
