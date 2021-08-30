let sBaseUrl = "http://rickandmortyapi.com/api/";
let sType = "location/";

const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const locName = searchParams.get("locName");
if ( locName != null ) { searchLocation(locName) }

function searchLocation(sLocName){
    let sInput = $("#locationInput").val()

    if(sLocName != null)
        sInput = sLocName;
        
    let bIsNum = /^\d+$/.test(sInput);

    $("#locationJumbotron").html("");
    if(bIsNum){
        getJSON(sBaseUrl + sType + sInput, (oData) => {
            processLocationData(oData);
        });
    } else {
        getJSON(sBaseUrl + sType + "?name=" + sInput, (oData) => {
            var aLocations = oData.results;
            aLocations.forEach(location => {
                processLocationData(location);
            });
        });
    }
}

function processLocationData(oLocation){
    var nLocationID = oLocation.id;
    addLocationJumbotron(oLocation);

    var aResidents = oLocation.residents;
    aResidents.forEach(resident => {
        getJSON(resident, (oData) => {
            addResidentToList(oData, nLocationID);
        });
    });
}

function addLocationJumbotron(oLocation){
    $("#locationJumbotron").append('\
    <div class="jumbotron">\
        <h1>' + oLocation.name + '</h1>\
        <p class="lead">Type: ' + oLocation.type + '</p>\
        <p class="lead">Dimension: ' + oLocation.dimension + '</p>\
        <p class="lead">Residents:</p>\
        <ul class="list-group" id="residentList_' + oLocation.id + '"></ul>\
    </div>');
}

function addResidentToList(oResident, nLocationID){
    $("#residentList_" + nLocationID).append('<li class="list-group-item"><a href="./characters.html?charID=' + oResident.id + '">' + oResident.name + '</a></li>');
}

function getJSON(sUrl, callback){
    $.getJSON(sUrl)
        .done((oData) => {
            callback(oData);
        })
        .fail((oError) => {
            console.log(oError);
        });
}