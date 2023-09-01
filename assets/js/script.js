// Opgave 1: objekt
// Opret et objekt kaldet "person" med felterne "navn", "alder" og "job". 
// Udskriv objektet til konsollen.

const person = {
    navn:"Indo", 
    alder:"29", 
    job:"Studerende",
    // Opgave 2: Objektfelter
    // Tilføj en funktion til "person" objektet kaldet "beskrivelse", der returnerer en streng med personens navn, alder og job. Udskriv resultatet af funktionen.
    beskrivelse: function() {
        return this.navn + " " + this.alder + " " + this.job;
    }
    
};
console.log(person.beskrivelse());


// Opgave 3: Flere objekter
// Opret et array af objekter, der hver representer en person med navn, alder og job. 
// Brug en map funtion eller forEach til at udskrive alle personernes navne.

const personer = [
    { navn:"Indo1", alder:"29", job:"Studerende"},
    { navn:"Indo2", alder:"30", job:"Studerende"},
    { navn:"Indo3", alder:"31", job:"Studerende"},
];

// mapping  
const map1 = personer.map((x) => {
    console.log(x.navn);
});
// eller forEach
Object.values(personer).forEach((x) => {
    console.log(x.navn);
});

// Opgave 4: Indlejrede objekter
// Lav et objekt kaldet "bil" med felterne "mærke", "model" og "år". 
// Opret en person med navn, alder og en bil (bil object). Udskriv personens biloplysninger.

const bil = {
    mærke:"Lamborghini",
    model:"Gallardo",
    år:"2023",
    person: {
        navn:"Indo",
        alder:"29",
        bil:{
            mærke:"Toyota",
            model:"Prius",
            år:"1975"
        }
    }
};
console.log(bil.person.bil);

// Opgave 5: Objektkopiering
// Opret en kopi af "person" objektet ved at bruge  Object.assign(). 
// Opdater kopien med en ny alder og udskriv både original og kopi.

const kopi = Object.assign({}, bil);

kopi.person = Object.assign({}, kopi.person); // indlejrede objekter skal også kopieres

kopi.person.alder = "30";   

console.log(bil, kopi);