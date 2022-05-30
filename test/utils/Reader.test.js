const Reader = require("./../../lib/utils/Reader");

describe("Test de clase Reader", () => {
    test("Obtener la lista de todos los explorers", () => {
        
        const ExplorersRead = Reader.readJsonFile("./test/utils/prueba.json");
        expect(ExplorersRead.length).toBe(5);
    });
});