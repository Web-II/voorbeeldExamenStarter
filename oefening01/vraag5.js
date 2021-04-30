/**
 * Vraag 5
 * Definieer een klasse Rectangle.
 * Vereisten voor deze klasse:
 * - de constructor moet twee parameters hebben nl. width en height.
 * - indien er geen height opgegeven wordt bij de creatie van een Rectangle
 *   dan stel je deze in op de speciale waarde null.
 * - je bewaart de hoogte en de breedte in private properties. Maak hierbij gebruik
 *   van de conventie i.v.m. private properties uit de lessen (namen
 *   van private properties laten we beginnen met een 'underscore'.)
 * - van een bestaand Rectangle-object moet je de height en width kunnen instellen en opvragen.
 * - de omtrek van een Rectangle-object moet opgevraagd kunnen worden via een getter perimeter
 * - indien een Rectangle-object omgezet wordt naar een string moet een zin afgebeeld
 *   worden zoals vermeld is bij de onderstaande console.log-statements.
 *   De afgebeelde tekst moet exact gelijk zijn aan deze in de
 *   console.log-statements.
 *
 * Maak:
 * - een object rechthoek1 met breedte=10 en hoogte=20.
 * - een object rechthoek2 met breedte=15 en waarbij de hoogte niet ingesteld is.
 */


 

console.log(rechthoek1.height); // 20
console.log(rechthoek1.perimeter); // 60
console.log('String - ' + rechthoek1); // String - Rechthoek met breedte=10 en hoogte=20
rechthoek2.width = 15;
console.log('String - ' + rechthoek2); // String - Rechthoek met breedte=15 en hoogte=unknown
