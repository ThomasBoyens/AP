let sBaseUrl = "http://rickandmortyapi.com/api/";
let sType = "episode/";

function searchEpisode(){
    let sInput = $("#episodeInput").val()

    let bIsNum = /^\d+$/.test(sInput);

    $("#episodeJumbotron").html("");
    if(bIsNum){
        getJSON(sBaseUrl + sType + sInput, (oData) => {
            processEpisodeData(oData);
        });
    } else {
        getJSON(sBaseUrl + sType + "?name=" + sInput, (oData) => {
            var aEpisodes = oData.results;
            aEpisodes.forEach(episode => {
                processEpisodeData(episode);
            });
        });
    }
}

function processEpisodeData(oEpisode){
    var nEpisodeID = oEpisode.id;
    addEpisodeJumbotron(oEpisode);

    var aCharacters = oEpisode.characters;
    aCharacters.forEach(character => {
        getJSON(character, (oData) => {
            addCharacterToList(oData, nEpisodeID);
        });
    });
}

function addEpisodeJumbotron(oEpisode){
    $("#episodeJumbotron").append('\
    <div class="jumbotron">\
        <h1>' + oEpisode.name + '</h1>\
        <p class="lead">Air date: ' + oEpisode.air_date + '</p>\
        <p class="lead">Episode: ' + oEpisode.episode + '</p>\
        <hr class="my-4">\
        <p>Characters in this episode: </p>\
        <ul class="list-group" id="characterList_' + oEpisode.id + '"></ul>\
    </div>');
}

function addCharacterToList(oCharacter, nEpisodeID){
    $("#characterList_" + nEpisodeID).append('<li class="list-group-item"><a href="./characters.html?charID=' + oCharacter.id + '">' + oCharacter.name + '</a></li>');
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