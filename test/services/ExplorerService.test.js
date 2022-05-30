const ExplorerService = require("./../../lib/services/ExplorerService");
const ExplorersRead = require("./../../lib/utils/Reader");

describe("Test de clase ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers con mission node", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Contar todos los explorers con mission node", () => {
        const explorer = ExplorersRead.readJsonFile("./test/utils/prueba.json");
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorer, "node");
        expect(explorersInNode).toBe(2);
    });

    test("Requerimiento 3: Mostrar los githubUsername de todos los explorers con mission node", () => {
        const explorer = ExplorersRead.readJsonFile("./test/utils/prueba.json");
        const GithubUsernames = ExplorerService.getExplorersUsernamesByMission(explorer, "node");
        expect(GithubUsernames).toContain("ajolonauta2");
        expect(GithubUsernames).toContain("ajolonauta4");
    });

    test("Requerimiento 4: Filtrar explorers por stack", () => {
        const explorer = ExplorersRead.readJsonFile("./test/utils/prueba.json");
        const ExplorersByStack = ExplorerService.getExplorerByStack(explorer, "elixir");
        expect(ExplorersByStack.length).toBe(2);
    });

    test("Requerimiento 5: Filtrar por misión y convertir salida en una cadena tipo string", () => {
        const explorer = ExplorersRead.readJsonFile("./test/utils/prueba.json");
        const ExplorersByMission = ExplorerService.filterByMissionInString(explorer, "node");

        expect(ExplorersByMission).toBe("{\"name\":\"Woopa1\",\"githubUsername\":\"ajolonauta2\",\"score\":2,\"mission\":\"node\",\"stacks\":[\"javascript\",\"groovy\",\"elm\"]}{\"name\":\"Woopa2\",\"githubUsername\":\"ajolonauta4\",\"mission\":\"node\",\"score\":4,\"stacks\":[\"javascript\"]}");
    });
});