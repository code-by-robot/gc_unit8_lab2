class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let denmark = new Country("Denmark", "Danish", "Hej!", ["red", "white", "red"]);
let skorea = new Country("South Korea", "Korean", "Howdy", ["blue", "black", "red"])


function SwitchCountry() {
    let input = document.getElementById("CountryList").value; 

    //let input = prompt("Enter a country: ")

    if (input === "USA") {
        //set country to usa 
        country = usa;
        DisplayColors(country);
    }
    else if (input === "Mexico") {
        country = mexico;
        DisplayColors(country);
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayColors(country);
    }
    else if (input === "Denmark") {
        country = denmark;
        DisplayColors(country);
    }
    else if (input === "South Korea") {
        country = skorea;
        DisplayColors(country);
    }
}

function DisplayColors(countrychoice){
    //let namenode = document.getElementById("CountryName");
    //namenode.innerText = countrychoice.name;
    
    
    document.getElementById("CountryName").innerText = countrychoice.name;
    document.getElementById("OfficialLanguage").innerText = countrychoice.lang;
    document.getElementById("HelloWorld").innerText = countrychoice.greeting;
    document.getElementById("Color1").style.backgroundColor = countrychoice.colors[0];
    document.getElementById("Color2").style.backgroundColor = countrychoice.colors[1];
    document.getElementById("Color3").style.backgroundColor = countrychoice.colors[2];
}