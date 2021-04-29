const csvFilePath = './test.csv'
const csv = require('csvtojson')

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        var jsonData = JSON.stringify(jsonObj);
        var fs = require('fs');
        fs.writeFile("converted.json", jsonData, function (err) {
            if (err) {
                console.log(err);
            }
        });
    })

