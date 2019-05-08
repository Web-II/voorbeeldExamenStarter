// Gebruik in deze oefening steeds forEach, filter, map en reduce voor het doorlopen van een array
// in plaats van een klassieke for–lus.

// 1. Wat is het resultaat van de volgende uitdrukking? Leg kort uit.

if (5) {
    console.log(`I like JavaScript`);
}

// Antwoord: 
// 

// 2. Overloop alle elementen van de onderstaande array. Schrijf die elementen naar de console die van het type number zijn.
// Maak gebruik van forEach.
// ...

// 3. Schrijf hieronder code om "Jana" op te zoeken en te verwijderen uit de array vrienden, zodat de array
// vrienden er nadien als volgt uitziet: ["Tom", "Stijn", "Emma", "Eva"]
// ...
console.log(vrienden);

// 4. Zet onderstaande code uit commentaar
// en vervang ... door iets anders.

// function display(a, ... ){
//     console.log(a);     // 1
//     console.log(b[2]);  // 4
// }

// display(1,2,3,4);

// 5. Zet onderstaande code uit commentaar en los de fout op.

// let myStudent = new Student();
// class Student{}

// 6. Schrijf een klasse Werknemer. Een werknemer heeft een naam, een aantalDagenVakantie en een aantalDagenVakantieOpgenomen.
// Voeg een methode aantalDagenVakantieResterend toe aan de klasse die het aantal resterende vakantiedagen retourneert.
// Creëer een object werknemer en test de methode uit door de resultaatwaarde van de methode in de console af te beelden.

// ...
console.log(werknemer.aantalDagenVakantieResterend());

// 7. Vertrek van de volgende object literal. Voeg na het const statement een statement
//     toe dat een extra property 'latijnse naam' toevoegt met de waarde 'Rosa rugosa'.

const roos = {
    naam: 'Rimpelroos',
    hoogte: 150
};

// ...
console.log(roos);

// 8. Ken een anonieme functie toe aan een variabele genaamd geefHoofdletter.
// De anonieme functie heeft twee parameters genaamd tekst en positie
// en retourneert de uppercase van de letter op de gevraagde positie in de tekst.
// Test de functie uit, door het console.log-statement uit commentaar te zetten.
// ...
// console.log(geefHoofdletter('abc', 2)); // B

// 9. Maak de som van de getallen op de even posities in de array.
const myArray = [3, 2, 11, 3, 3, 1];
// ...
console.log(somGetallen); //6

// 10. Tel het aantal paragrafen in index.html waarbij de paragraaftekst
// de letters 'de' bevat en beeld het aantal af in de console.

// ...
console.log(aantal); // 3

// 11. Vervang de tekst van de laatste paragraaf in index.html nl. 'Vierde paragraaf'
// door 'Laatste paragraaf'.

// ...
lastParagraph.innerHTML = 'Laatste paragraaf';

// 12. Beeld de resolvevalue van onderstaande promise af in de console.
const promise = fetch('resultaat.txt').then((response)=>response.text());
// ...