function fetchRequest(url) {
    // Retourneert een promise object met de JSON response
    // omgezet naar 'native Javascript objects'
    //...
}

class Menu {
    constructor(id, naam, type, omschrijving, samenstelling, prijs) {
        this._id = id;
        this._naam = naam;
        this._type = type;
        this._omschrijving = omschrijving;
        this._samenstelling = samenstelling;
        this._prijs = prijs;
    }

    get id() {
        return this._id;
    }
    get naam() {
        return this._naam;
    }
    get type() {
        return this._type;
    }
    get omschrijving() {
        return this._omschrijving;
    }
    get samenstelling() {
        return this._samenstelling;
    }
    get prijs() {
        return this._prijs;
    }
}

class MenusRepository {
    constructor() {
        this._menus = [];
        // Zet het volgende uit commentaar als het niet lukt om de menus op te halen uit de  JSON file
        /*
        this.menus = [new Menu(1, 'Voordeelmenu Cheese', 'Runds', 'Burger van rundvlees met cheddarkaas, ketchup, mosterd, uitjes en augurk op een speciaal hamburgerbroodje.', ['cheeseburger', 'grote friet', 'frisdrank', 'appel muffin'], 8.99)
            , new Menu(2, 'Voordeelmenu Double Cheese', 'Runds', 'Twee rundvlees burgers met twee plakken cheddarkaas, ketchup, mosterd, uitjes en augurk op een speciaal hamburgerbroodje.', ['doublecheese', 'medium friet', 'frisdrank'], 6.99)
            , new Menu(3, 'Voordeelmenu Vegetarisch', 'Vegetarisch', 'Een vegetarische Groenteburger met wortel, rode paprika, kleine erwten, groene bonen en ui, verse sla, tomaat en een frisse sandwichsaus op een sesambroodje.', ['groenteburger', 'grote friet', 'frisdrank', 'mcflurry kitkat'], 7.75)
            , new Menu(4, 'Voordeelmenu Chili McChicken', 'Kip', 'Broodje met krokante kip, frisse sla en sweet chilisaus.', ['chili mcchicken', 'kleine friet', 'frisdrank', 'appel muffin'], 6.99)
            , new Menu(5, 'Voordeelmenu Fish Filet', 'Vis', 'Visfilet met smeltkaas en tartaarsaus op een gestoomd broodje.', ['fish filet', 'medium friet', 'frisdrank', 'chocolate cookie'], 7.99)
            , new Menu(6, 'Voordeelmenu Hamburger Bacon', 'Runds', 'Hamburger Bacon: Burger van rundvlees met bacon (varkensvlees), ketchup, mosterd, uitjes en augurk op een speciaal hamburgerbroodje.', ['hamburger bacon', 'kleine friet', 'frisdrank', 'sidesalad', 'mcflurry stroopwafel'], 9.99)
            , new Menu(7, 'Voordeelmenu McWrap', 'Kip', 'Grote wrap met krokante kip, cheddar kaas, rucola, sla, tomaat en honing-mosterdsaus.', ['mcwrap honingmosterd', 'grote friet', 'frisdrank', 'appel muffin'], 9.49)
            , new Menu(8, 'Voordeelmenu Hamburger', 'Runds', 'Burger van rundvlees met ketchup, mosterd, uitjes en augurk op een speciaal hamburgerbroodje.', ['hamburger', 'medium friet', 'frisdrank', 'chocolate cookie'], 7.5)
            , new Menu(9, 'Voordeelmenu Chicken Sensation', 'Kip', 'Krokante kipfilet, honing-mosterdsaus, rode ui, ijsbergsla en tomaat op een sesam- en lijnzaadbroodje.', ['chicken sensation', 'kleine friet', 'frisdrank', 'appel muffin'], 8.5)
            , new Menu(10, 'Voordeelmenu McChicken', 'Kip', 'Malse kipfilet met een krokant laagje, sla en een frisse sandwichsaus op een sesambroodje.', ['mcchicken', 'grote friet', 'frisdrank', 'sidesalad', 'appel muffin'], 9.99)];
        */
    }

    get menus(){
        return this._menus;
    }

    addMenus(jsondata) {
        // Opvullen van de this._menus-array met Menu-objecten.
        //...
    }

    getTypes() {
        // Retourneert een alfabetisch gesorteerde string-array met de menutypes.
        //...        
    }

    getMenusByType(type) {
        // Retourneert een array van Menu-objecten van een bepaald type.
        //...        
    }
}

class MenusApp {
    constructor() {
        this.getData();
        this._count = 0;
    }

    getData() {
        // Ophalen data en afbeelden van de initiële webpagina.
        //...
    }

    typesToHtml() {
        // Voegt de verschillende types toe aan het Select-element (initieel bevat dit enkel de optie 'Alles').
        // En zorgt ervoor dat als je een type kiest in de keuzelijst enkel
        // de menu's van dit type getoond worden.
        //...
    }

    addItemtoCart(menuElement) {
        // AAN DEZE METHODE MOET JE NIETS WIJZIGEN!
        // We houden enkel een teller bij in 'this._count'.
        this._count++;
        this.setCartInStorage();
        this.cartToHtml();
        // Tekst van het h2-element afbeelden nl. het bestelde item.
        alert(menuElement.firstElementChild.innerText);
    }
    
    setCartInStorage() {
        // De teller 'this._count' opslaan onder de naam 'Cart' in localStorage.
        //...
    }

    getCartFromStorage() {
        // 'Cart' ophalen uit localStorage en in 'this._count' stoppen.
        // ...
        this.cartToHtml();
    }
    
    cartToHtml() {
        // De Cart (is enkel de teller 'this._count'), weergeven op de webpagina.
        //...
    }

    menusToHtml(type) {
        // Voegt alle menu's van een bepaald type toe aan de Webpagina
        // en zorgt ervoor dat als er geklikt wordt op een AddCart-button
        // de methode addItemtoCart uitgevoerd wordt. 
        //...
    }   
}

function init() {
    const menusApp = new MenusApp();
}

window.onload = init;
