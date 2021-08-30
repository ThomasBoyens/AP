var sBaseUrl = "http://localhost:3030/cats/random";
function getFact(sType) {
    var sUrl = sBaseUrl + "?animal_type=" + sType;
    $.getJSON(sUrl)
        .done(function (oData) {
            $("#fact").html(oData.text);
        })
        .fail(function (oError) {
            console.error(oError);
        });
}
