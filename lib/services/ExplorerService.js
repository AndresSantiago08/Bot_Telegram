class ExplorerService{
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission === mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const ExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return ExplorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const ExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return ExplorersByMission.map((explorer) => explorer.githubUsername);
    }

    static getExplorerByStack(explorers, stack){
        const ExplorersByStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return ExplorersByStack;
    }

    static filterByMissionInString(explorer, mission){
        const ExplorersByMission = this.filterByMission(explorer, mission);
        let arrayToString = "";

        ExplorersByMission.forEach(element => {
            arrayToString += JSON.stringify(element);
        });

        return arrayToString;
    }
}

module.exports = ExplorerService;