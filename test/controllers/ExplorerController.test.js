const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Pruebas de unidad de la clase ExplorerController", () => {
    test("Requerimiento 1: Filtrar por misión", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("node");
        expect(explorersByMission.length).toBe(10);
    });

    test("Requerimiento 2: Obtener los Usernames de los explorers con esa misión", () => {
        const explorerUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorerUsernames).toContain("ajolonauta1");
        expect(explorerUsernames).toContain("ajolonauta2");
        expect(explorerUsernames).toContain("ajolonauta3");
        expect(explorerUsernames).toContain("ajolonauta4");
        expect(explorerUsernames).toContain("ajolonauta5");
        expect(explorerUsernames).toContain("ajolonauta11");
        expect(explorerUsernames).toContain("ajolonauta12");
        expect(explorerUsernames).toContain("ajolonauta13");
        expect(explorerUsernames).toContain("ajolonauta14");
        expect(explorerUsernames).toContain("ajolonauta15");
    });

    test("Requerimiento 3: Obtener el numero de explorers de esa misión", () => {
        const numberOfExplorersByMission = ExplorerController.getExplorersAmountByMission("node");
        expect(numberOfExplorersByMission).toBe(10);
    });

    test("Requerimiento 4: Obtener lista de explorers que contengan el stack", () => {
        const explorersByStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersByStack.length).toBe(11);
    });

    test("Requerimiento 5: Filtrar por misión y convertir salida en una cadena tipo string", () => {
        const ExplorersByMission = ExplorerController.getExplorersByMissionInString("java");

        expect(ExplorersByMission).toBe("{\"name\":\"Woopa6\",\"githubUsername\":\"ajolonauta6\",\"score\":6,\"mission\":\"java\",\"stacks\":[\"elm\"]}{\"name\":\"Woopa7\",\"githubUsername\":\"ajolonauta7\",\"mission\":\"java\",\"score\":7,\"stacks\":[]}{\"name\":\"Woopa8\",\"githubUsername\":\"ajolonauta8\",\"score\":8,\"mission\":\"java\",\"stacks\":[\"elm\"]}{\"name\":\"Woopa9\",\"githubUsername\":\"ajolonauta9\",\"score\":9,\"mission\":\"java\",\"stacks\":[\"javascript\",\"elixir\",\"groovy\",\"reasonML\",\"elm\"]}{\"name\":\"Woopa10\",\"githubUsername\":\"ajolonauta10\",\"score\":10,\"mission\":\"java\",\"stacks\":[\"javascript\",\"elixir\",\"groovy\",\"reasonML\",\"elm\"]}");
    });
});