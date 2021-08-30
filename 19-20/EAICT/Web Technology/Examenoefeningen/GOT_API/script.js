var sBaseUrl = "https://api.got.show/api/";

function getEpisode(sInput) {

  var sCat = "map/episodes/";
  var sInput = $("#episodeInput").val();

  var bIsnum = /^\d+$/.test(sInput);

  if (bIsnum) {
    var sBy = "byId/"
    $.get(sBaseUrl + sCat + sBy + sInput)
      .done((oData) => {
        $("#episode").html("")
        var sName = oData.name;
        var sDirector = oData.director;
        var sAirDate = oData.airDate;
        var sEpisode = "S" + oData.season + "E" + oData.nr;
        var sPrevEpisode = oData.predecessor;
        var sNextEpisode = oData.succesor;
        var aCharacters = oData.characters;

        $("#episode").append('<div class="container"> \
                <div class="row">\
                <div class="col">\
                  Name: ' + sName + ' \
                </div>\
                <div class="col">\
                Director: ' + sDirector + ' \
                </div>\
                <div class="col">\
                Air date: ' + sAirDate + ' \
                </div>\
              </div>\
              <div class="row">\
                <div class="col">\
                   Previous episode: ' + sPrevEpisode + ' \
                </div>\
                <div class="col">\
                Episode: ' + sEpisode + ' \
                </div>\
                <div class="col">\
                Next Episode: ' + sNextEpisode + ' \
                </div>\
              </div>\
              <p>Characters: </p>\
              </div>')

        for (var i = 0; i < aCharacters.length; i++) {
          if (aCharacters[i] == "" || null)
            break;
          $("#list").append('<li class="list-group-item">' + aCharacters[i] + '</li>');
          console.log($("#list"))
        }

      })
      .fail((oError) => {
        alert("Something went wrong, check your spelling. If you are still not sure, check the console");
        console.log(oError);
      });
  } else {
    $.getJSON(sBaseUrl + sCat + sInput)
      .done((oData) => {
        $("#episode").html("")
        var sName = oData.data.name;
        var sDirector = oData.data.director;
        var sAirDate = oData.data.airDate;
        var sEpisode = "S" + oData.data.season + "E" + oData.data.nr;
        var sPrevEpisode = oData.data.predecessor;
        var sNextEpisode = oData.data.successor;
        var sMessage = oData.message;
        var aCharacters = oData.data.characters;
        console.log(sMessage);
        console.log(sName);

        $("#episode").append('<div class="container"> \
                <div class="row">\
                <div class="col">\
                  Name: ' + sName + ' \
                </div>\
                <div class="col">\
                Director: ' + sDirector + ' \
                </div>\
                <div class="col">\
                Air date: ' + sAirDate + ' \
                </div>\
              </div>\
              <div class="row">\
                <div class="col">\
                   Previous episode: ' + sPrevEpisode + ' \
                </div>\
                <div class="col">\
                Episode: ' + sEpisode + ' \
                </div>\
                <div class="col">\
                Next Episode: ' + sNextEpisode + ' \
                </div>\
              </div>\
              </br>\
              <p>Characters: </p>\
              </div>')

        for (var i = 0; i < aCharacters.length; i++) {
          if (aCharacters[i] == "" || null)
            break;
          $("#list").append('<li class="list-group-item">' + aCharacters[i] + '</li>');
          console.log($("#list"))
        }

      })
      .fail((oError) => {
        alert("Something went wrong, check your spelling. If you are still not sure, check the console");
        console.log(oError);
      });
  }
}

function getCharacterData(sInput) {

  var sCat = "show/characters/";

  $.get(sBaseUrl + sCat + sInput)
    .done((oData) => {
      $("#character").html("")
      var sName = oData.name;
      var sImgUrl = oData.image;
      var aOrigin = oData.origin;  
      var sOrigin = "";
      sOrigin = aOrigin.join(', ');

      $("#character").append('<div class="card" style="width: 18rem; "> \
      <br/><img class="card-img-top" src=' + sImgUrl + ' alt="Card image cap"> \
      <div class="card-body"> \
      <h5 class="card-title">Name: ' + sName + ' </h5> \
      <p class="card-title"> Origin: ' + sOrigin + ' </p> \
      </div> \
    </div>')
  });
}

function getCharacter() {
  var sInput = $("#characterInput").val();
  if (sInput !== undefined) {
    getCharacterData(sInput);
  }
}