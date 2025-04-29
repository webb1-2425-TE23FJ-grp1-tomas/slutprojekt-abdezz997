const characters = document.querySelectorAll('.character');
characters.forEach(character => {
    character.addEventListener('click', () => {
        const takenText = character.querySelector('.taken');

        // If 'Taken' text exists, remove it; otherwise, add it.
        if (takenText) {
            character.removeChild(takenText);
        } else {
            // Remove 'Taken' text from all characters
            characters.forEach(otherCharacter => {
                const otherTakenText = otherCharacter.querySelector('.taken');
                if (otherTakenText) {
                    otherCharacter.removeChild(otherTakenText);
                }
            });

            // Add 'Taken' text to the clicked character
            const newTakenText = document.createElement('div');
            newTakenText.classList.add('taken');
            newTakenText.innerText = 'Taken';
            character.appendChild(newTakenText);
        }
    });
});
