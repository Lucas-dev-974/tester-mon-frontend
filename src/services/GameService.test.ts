import GameService from "./GameService";

describe("TEST API", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: "Mocked response" }),
    });
  });

  afterEach(() => {
    global.fetch = jest.fn().mockClear();
  });

  it("Test get all", async () => {
    const id = 1;
    const response = await GameService.getAll();

    // URL/Méthode teste
    expect(fetch).toHaveBeenCalledWith("http://127.0.0.1:8000/api/game", {
      method: "GET",
    });

    // Nomnbre d'appel de fetch
    expect(fetch).toHaveBeenCalledTimes(1);

    // Contenue de la réponse
    expect(response).toEqual({ message: "Mocked response" });
  });

  it("Test one", async () => {
    const id = 1;
    const response = await GameService.get(id);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`http://127.0.0.1:8000/api/game/${id}`, {
      method: "GET",
    });
    expect(response).toEqual({ message: "Mocked response" });
  });

  it("Test post", async () => {
    const response = await GameService.post({
      name: "Game test",
      editor: "Editor",
      nb_players: 1,
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`http://127.0.0.1:8000/api/game`, {
      method: "POST",
      body: JSON.stringify({
        name: "Game test",
        editor: "Editor",
        nb_players: 1,
      }),
    });
    expect(response).toEqual({ message: "Mocked response" });
  });

  it("Test update", async () => {
    const response = await GameService.put({
      name: "Game test",
      editor: "Editor",
      nb_players: 1,
      id: 1,
      haveAction: false,
      actions: [],
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`http://127.0.0.1:8000/api/game/1`, {
      method: "PUT",
      body: JSON.stringify({
        name: "Game test",
        editor: "Editor",
        nb_players: 1,
        id: 1,
      }),
    });

    expect(response).toEqual({ message: "Mocked response" });
  });

  it("Test delete", async () => {
    const response = await GameService.delete(1);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`http://127.0.0.1:8000/api/game/1`, {
      method: "DELETE",
    });

    expect(response).toEqual({ message: "Mocked response" });
  });
});
