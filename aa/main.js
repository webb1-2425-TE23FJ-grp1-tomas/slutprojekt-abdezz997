// main.js
document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');

    characters.forEach(character => {
        character.addEventListener('click', () => {
            const takenText = character.querySelector('.taken');

            if (takenText) {
                character.removeChild(takenText);
            } else {
                characters.forEach(otherCharacter => {
                    const otherTakenText = otherCharacter.querySelector('.taken');
                    if (otherTakenText) {
                        otherCharacter.removeChild(otherTakenText);
                    }
                });

                const newTakenText = document.createElement('div');
                newTakenText.classList.add('taken');
                newTakenText.innerText = 'Taken';
                character.appendChild(newTakenText);
            }
        });
    });
});
