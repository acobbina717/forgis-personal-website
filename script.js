const input = document.getElementById("addedPlanets");
const ul = document.getElementById("planetsList");

function addPlanetToList() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value = "";

}

function inputLength() {
    return input.value.length;
}
function addPlanetAfterKeydown(event) {
    if (inputLength() > 0 && event.which === 13) {
        addPlanetToList();
    }
}

input.addEventListener("keydown", addPlanetAfterKeydown);


const submitPlanetButton = document.getElementById("planetSubmit")

submitPlanetButton.addEventListener("click", addPlanetToList);

