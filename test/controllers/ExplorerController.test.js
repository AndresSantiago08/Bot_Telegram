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
});