const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Fizzbuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const countExplorersInMission = ExplorerController.getExplorersAmountByMission(mission);
    const objectMission = {mission: mission, quantity: countExplorersInMission};

    response.json(objectMission);
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const githubUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);

    response.json(githubUsernamesByMission);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const number = request.params.score;
    const validation = ExplorerController.getValidationInNumber(number);
    const objectValidation = {score: number, trick: validation};
    
    response.json(objectValidation);
});

app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorersByStack = ExplorerController.getExplorersByStack(stack);

    response.json(explorersByStack);
});

app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost: ${port}`);
});

