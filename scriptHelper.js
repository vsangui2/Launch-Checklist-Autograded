require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
        <img src="${imageUrl}">
    `;
 };
 
 function validateInput(input) {
    if (input === "") {
        return "Empty";
    } else if (isNaN(input)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
};

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {

    if (validateInput(pilotName) === "Empty" || validateInput(pilotName) === "Is a Number") {
        alert("All fields are required. Please enter a valid name");
    } else if (validateInput(copilotName) === "Empty" || validateInput(copilotName) === "Is a Number") {
        alert("All fields are required. Please enter a valid name");
    } else if (validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number") {
        alert("All fields are required. Please enter a non negative number");
    } else if (validateInput(cargoMass) === "Empty" || validateInput(cargoMass) === "Not a Number") {
            alert("All fields are required. Please enter a non negative number");
    } else {

      list = document.getElementById("faultyItems");
      launchStatus = document.getElementById("launchStatus");
      pilotStatus = document.getElementById("pilotStatus");
      copilotStatus = document.getElementById("copilotStatus");
      fuelStatus = document.getElementById("fuelStatus");
      cargoStatus = document.getElementById("cargoStatus");

  
    if (fuelLevel < 10000) {
        list.style.visibility = 'visible';
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus.innerHTML = "Pilot Chris is ready for launch";
        copilotStatus.innerHTML = "Co-pilot Bob is ready for launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoMass > 10000) {
        list.style.visibility = "visible";
        cargoStatus.textContent = "Cargo mass too heavy for launch";
    } else {
        cargoStatus.textContent = "Cargo mass low enough for launch";
    }

    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        list.style.visibility = 'visible';
        launchStatus.style.color = 'green';
        launchStatus.textContent = "Shuttle is Ready for Launch";
       
    }
    pilotStatus.textContent = `Pilot ${pilotName} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilotName} is ready for launch`;
}
};

async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    return await planetsReturned.json();
}

function pickPlanet(planetsReturned) {
    const randomIndex = Math.floor(Math.random() * planetsReturned.length);
    return planetsReturned[randomIndex];
}

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;