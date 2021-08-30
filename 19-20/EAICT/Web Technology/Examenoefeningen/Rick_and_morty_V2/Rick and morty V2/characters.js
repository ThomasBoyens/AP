let sBaseUrl = "http://rickandmortyapi.com/api/";
let sType = "character/";

const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const charID = searchParams.get("charID");
if ( charID != null ) { searchCharacter(charID) }

function searchCharacter(sCharID){
    let sInput = $("#characterInput").val()

    if(sCharID != null)
        sInput = parseInt(sCharID);
        
    let bIsNum = /^\d+$/.test(sInput);

    $("#characterCard").html("");
    if(bIsNum){
        getJSON(sBaseUrl + sType + sInput, (oData) => {
            addCharacterCard(oData);
        });
    } else {
        getJSON(sBaseUrl + sType + "?name=" + sInput, (oData) => {
            var aCharacters = oData.results;
            aCharacters.forEach(character => {
                addCharacterCard(character);
            });
        });
    }
}

function addCharacterCard(oCharacter){
    $("#characterCard").append('\
    <div class="card" style="width: 18rem;">\
        <img class="card-img-top" src="' + oCharacter.image + '" alt="Sorry, couldnt find image for this character">\
        <div class="card-body">\
            <h5 class="card-title">' + oCharacter.name + '</h5>\
            <p class="card-text">ID: ' + oCharacter.id + '</p>\
            <p class="card-text">Species: ' + oCharacter.species + '</p>\
            <p class="card-text">Gender: ' + oCharacter.gender + '</p>\
            <p class="card-text">Status: ' + oCharacter.status + '</p>\
            <a class="card-text" href="./locations.html?locName=' + oCharacter.origin.name + '">Origin: ' + oCharacter.origin.name + '</a>\
            <a class="card-text" href="./locations.html?locName=' + oCharacter.location.name + '">Location: ' + oCharacter.location.name + '</a>\
        </div>\
    </div>');
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