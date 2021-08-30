const sBaseUrl = "";

const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const data = searchParams.get("data");
if ( data != null ) { searchData(data) }


function searchData(data){
    var sInput = $("#inputField").val();

    if(data != null)
        sInput = data;
    
    var bIsNum = /^\d+$/.test(sInput);

    if(bIsNum){
        getJSON(sBaseUrl + "special for number", (oData) => {
            processData(oData);
        });
    } else {
        getJSON(sBaseUrl + "special for string", (oData) => {
            processData(oData);
        });
    }  
}

function processData(oData){
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