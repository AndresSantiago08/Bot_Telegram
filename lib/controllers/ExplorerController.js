const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
const TelegramBot = require("node-telegram-bot-api");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorersByStack = ExplorerService.getExplorerByStack(explorers, stack);
        return explorersByStack;
    }

    static getExplorersByMissionInString(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMissionInString(explorers, mission);
    }

    static getBotResponse(userText){

        if(!isNaN(parseInt(userText))){
            const fizzbuzzTrick = ExplorerController.getValidationInNumber(parseInt(userText));
            return `Tu número es: ${userText}. Validación: ${fizzbuzzTrick}`;
        } else {
            const fizzbuzzTrick = ExplorerController.getExplorersByMissionInString(userText);
            return `La misión es: ${userText}. Explorers: ${fizzbuzzTrick}`;
        }
    }
}

module.exports = ExplorerController;