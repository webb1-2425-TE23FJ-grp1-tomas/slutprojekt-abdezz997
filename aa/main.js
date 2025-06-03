// main.js
document.addEventListener('DOMContentLoaded', () => { 
    // Vänta tills hela HTML-sidan är färdigladdad innan koden körs

    const characters = document.querySelectorAll('.character'); 
    // Hämta alla element med klassen 'character' och spara dem i en lista

    characters.forEach(character => { 
        // Gå igenom varje character-element

        character.addEventListener('click', () => { 
            // Lägg till klick-händelse på varje character

            const takenText = character.querySelector('.taken'); 
            // Kolla om detta element redan har ett barn med klassen 'taken'

            if (takenText) { 
                // Om det finns ett 'taken'-element i denna character...
                character.removeChild(takenText); 
                // ...ta bort det (avmarkera den)

            } else { 
                // Om det inte finns något 'taken'-element...

                characters.forEach(otherCharacter => { 
                    // Gå igenom alla andra character-element

                    const otherTakenText = otherCharacter.querySelector('.taken'); 
                    // Hitta 'taken'-element i dem

                    if (otherTakenText) { 
                        // Om ett annat character har 'taken'...
                        otherCharacter.removeChild(otherTakenText); 
                        // ...ta bort det (så bara en är markerad åt gången)
                    }
                });

                const newTakenText = document.createElement('div'); 
                // Skapa ett nytt div-element

                newTakenText.classList.add('taken'); 
                // Lägg till klassen 'taken' till det nya elementet

                newTakenText.innerText = 'Taken'; 
                // Sätt textinnehållet till "Taken"

                character.appendChild(newTakenText); 
                // Lägg till det nya 'taken'-elementet som barn till det klickade elementet
            }
        });
    });
});
