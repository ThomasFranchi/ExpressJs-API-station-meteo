const fs = require("fs")
const path = require('path');

const temperature = {
    postTemp: (req, res) => {

    const {temperature, stationName} = req.body;

    if (typeof temperature != 'number') {
        res.json({message: "la temperature doit être un nombre"})
        return;
    }

    if (typeof stationName != 'string') {
        res.json({message: "la temperature doit être une chaîne de caractères"})
        return;
    }

    let date = new Date();
    const contentString = `${temperature}°c - ${date}\n`;
    
    const fileName = path.join(__dirname,`../data/${stationName}.txt`);

    fs.appendFile(fileName,contentString, (err) => {
        console.log("test", path.join(__dirname))
        if (err) {
            res.json({message:"une erreur est apparue dans la création du fichier"})
        }
        res.json({message: "temperature enregistrée dans le fichier"})
    })

        // console.log(temperature, stationName)
        // res.json({message:"Temperature reçue"})
    },

    getTemp : (req,res) => {
        const stationName = req.params.name;
        console.log(stationName.name)
        const fileName = path.join(__dirname,`../data/${stationName}.txt`);
        console.log(fileName)
        res.sendFile(fileName, (err) => {
            if (err) {
                res.status(404).json({message: "Cette station météo n'existe pas !"});
                // res.status(404).end()
                return;
            }
        })
    }


}




module.exports = temperature;
