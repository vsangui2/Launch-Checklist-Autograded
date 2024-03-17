window.addEventListener("load", function() {
    let listedPlanets;
 // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        //console.log(listedPlanets);
// Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        const randomPlanet = pickPlanet(listedPlanets);
        const { name, diameter, star, distance, moons, image } = randomPlanet;
        addDestinationInfo(document, name, diameter, star, distance, moons, image);
    });

document.getElementById('launchForm').addEventListener('submit', function(event) {
    event.preventDefault();


    let list = document.getElementById('faultyItems');
    let pilotName = document.querySelector('input[name=pilotName]').value;
    let copilotName = document.querySelector('input[name=copilotName]').value;
    let fuelLevel = parseInt(document.querySelector('input[name=fuelLevel]').value);
    let cargoMass = parseInt(document.querySelector('input[name=cargoMass]').value);
    
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
});
});