const fs = require('fs');
const path = require("path");
const dateTimeFormat = Intl.DateTimeFormat('fr-FR', {
    dateStyle: "short",
    timeStyle:"medium"
}) 

    // Controler with two methods "saveTemperature" and "getTemperature" from POST
 const temperature = {

        // Create or append a file with temperature, stationName and date
    saveTemperature: (req, res) => {
        const {temperature, stationName} = req.body;
        
        // Check if temperature is available and a number
        if (typeof temperature !== "number") {
            return res.status(422).json({message: "Temperature is required and must be a number !"})
        }

        // Check if stationName is available and a string
        if  (typeof stationName !== "string") {
            return res.status(422).json({message: "Station name is required and must be a string !"})
        }

        const date = new Date()

        // set the string used for the content of the file. Concatenate date + temperure in Celsius
        const trace = `${dateTimeFormat.format(date)} - ${temperature}°c\n`;

        // Set the path and the name of the file created
        const filePath = path.join(__dirname, `../data/${stationName}.txt`)

        // Create or append a file, with selected message if error or succes
        fs.appendFile(filePath, trace, (err) => {
            if (err) {
                return res.status(500).json({message: "An error has occured"});
            }

            res.json({message: "Temperature registered"})
        });
    },

            
    // Respond to the GET from the string "/:params". 
    getTemperature: (req, res) => {
        const {stationName} = req.params;

        const filePath = path.join(__dirname, `../data/{stationName}.txt`);
        // Display 404 error message if the stationName is not found 
        res.sendFile(filePath, (err) => {
            if (err) {
                res.status(404).end();
            }
        });

    }
};

module.exports = temperature;
