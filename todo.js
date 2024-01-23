document.addEventListener('DOMContentLoaded', (event) => {
    aufgabenLaden();
});

function aufgabenLaden() {
    let aufgaben = JSON.parse(localStorage.getItem('aufgaben')) || [];
    let aufgabenListe = document.getElementById('todoListe');
    aufgabenListe.innerHTML = '';

    aufgaben.forEach((aufgabe, index) => {
        let li = document.createElement('li');
        li.textContent = aufgabe.text;

        // Hinzugefügt: Klasse basierend auf der Priorität setzen
        li.classList.add(aufgabe.prioritaet);

        aufgabenListe.appendChild(li);

        let loeschButton = document.createElement('button');
        loeschButton.textContent = 'Löschen';
        loeschButton.onclick = function() {
            aufgabeLoeschen(index);
        };
        li.appendChild(loeschButton);
    });
}

// Rest des Codes bleibt unverändert

