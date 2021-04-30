/** 
 * oefening03
 * ----------
 * In deze oefening moet je data uit een JSON-file ophalen
 * en deze afbeelden in de Console.
 * 
 * Zorg ervoor dat je het onderstaande resultaat (vier regels) bekomt in de console,
 * door Vraag a), b) en c) hieronder op te lossen:
 
   Console output:

       De JSON-file bevat 3 boeken: 
       1. De bevrijding van Vlaanderen
       2. Sapiens
       3. De Bourgondiërs 
 
 */

class Book {
    // Vraag a)
    // Vul hieronder de constructor-methode verder aan en voorzie
    // in deze class een getter title en een getter author.
    constructor(title, author) {
        // TYP HIERONDER JOUW CODE



    }

    // TYP HIERONDER JOUW CODE



}

class Vraag10Compoment {
    constructor() {
        // this._books is een array van Book-objecten
        this._books = [];

        // Vraag b):
        // Haal de data uit de json-file /data/ebooks.json op en stop de data in de array 'this._books'.
        // Let op: de array 'this._books' moet Book-objecten (instances van de class Book) bevatten.
        // Roep vervolgens de methode booksToConsole() op.
        // TYP HIERONDER JOUW CODE



    }

    booksToConsole() {
        // Vraag c):
        // Deze methode genereert op basis van de array this._books (met Book-objecten)
        // de gevraagde console output.
        // TYP HIERONDER JOUW CODE


        
    }
}

function init() {
    const vraag10Component = new Vraag10Compoment();
}

window.onload = init;
