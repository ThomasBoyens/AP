var sBaseUrl = "https://rickandmortyapi.com/api/";

function getLocationData(sInput) {
    var sCat = "location/";

    $.get(sBaseUrl + sCat + sInput)
        .done((oData) => {
            $("#locationJumbotron").html("");
            var sName = oData.name;
            var sDimension = oData.dimension;
            var sType = oData.type;
            if (sType.length === 0) {
                sType = "No type";
            }

            $("#locationJumbotron").append('<div class="card" style="width: 50rem; "> \
      <br/>\
      <h5 class="card-title">Name: ' + sName + ' </h5> \
      <p class="card-title"> Type: ' + sType + ' </p> \
      <p class="card-title"> Location: ' + sDimension + ' </p> \
      </div> \
    </div>')
        });
}

function getLocation() {
    var sInput = $("#locationInput").val();
    if (sInput !== undefined) {
        getLocationData(sInput);
    }
}

function getEpisodeData(sInput) {
    var sCat = "episode/";

    $.get(sBaseUrl + sCat + sInput)
        .done((oData) => {
            $("#episodeJumbotron").html("");
            var sName = oData.name;
            var sEpisode = oData.episode;
            var sAirDate = oData.air_date;

            $("#episodeJumbotron").append('<div class="card" style="width: 50rem; "> \
      <br/>\
      <h5 class="card-title">Name: ' + sName + ' </h5> \
      <p class="card-title"> Episode: ' + sEpisode + ' </p> \
      <p class="card-title"> Air date: ' + sAirDate + ' </p> \
      </div> \
    </div>')
        });
}

function getEpisode() {
    var sInput = $("#episodeInput").val();
    if (sInput !== undefined) {
        getEpisodeData(sInput);
    }
}

function getCharacter() {

    var sCat = "character/";

    $.get(sBaseUrl + sCat, function (oData) {
        $("#character").html("");
        oData.results.forEach(result => {
            var sImgUrl = result.image;
            var sName = result.name;
            var sStatus = result.status;
            var sGender = result.gender;
            var sSpecies = result.species;
            var sOrigin = result.origin.name;
            var sLocation = result.location.name
            var aEpisodes = result.episode;

            aEpisodes.forEach(episode => {
                $("#episodeList").append('<li class="list-group-item" >' + episode + '</li>')
            });

            $("#character").append('<div class="card" style="width: 18rem; "> \
      <br/><img class="card-img-top" src=' + sImgUrl + ' alt="Card image cap"> \
      <div class="card-body"> \
      <h5 class="card-title">Name: ' + sName + ' </h5> \
      <p class="card-title"> Gender: ' + sGender + ' </p> \
      <p class="card-title"> Status: ' + sStatus + ' </p> \
      <p class="card-title"> Species: ' + sSpecies + ' </p> \
      <p class="card-title"> Origin: ' + sOrigin + ' </p> \
      <p class="card-title"> Location: ' + sLocation + ' </p> \
      <p>\
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">\
        Episodes\
      </button>\
    </p>\
    <div class="collapse" id="collapseExample">\
      <div class="card card-body">\
          <ul class="list-group" id="episodeList">\
            </ul>\
      </div>\
      </div> \
      </div>\
    </div>')
        });
    });
}
