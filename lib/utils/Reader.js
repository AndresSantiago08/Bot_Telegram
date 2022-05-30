const fs = require("fs");
class Reader{

    static readJsonFile(pathArchivo){
        const rawdata = fs.readFileSync(pathArchivo);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;