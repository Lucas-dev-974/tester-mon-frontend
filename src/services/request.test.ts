import GameService from "./gameFetch";

describe("TEST API", () => {
  it("Test get one", async () => {
    const response = await GameService.get(1);
    expect(response).toStrictEqual({
      id: "1",
      name: "jeu 1",
      editor: "editeur 1",
      nb_players: 1,
    });
  });

  it("Test get all", async () => {
    const response = await GameService.getAll();
    expect(response).toStrictEqual([
      {
        id: "1",
        name: "jeu 1",
        editor: "editeur 1",
        nb_players: 1,
      },
      {
        id: "2",
        name: "jeu 2",
        editor: "editeur 2",
        nb_players: 2,
      },
      {
        id: "3",
        name: "jeu 3",
        editor: "editeur 3",
        nb_players: 3,
      },
    ]);
  });

  it("Post create game", async () => {
    const data = { name: "jeu 4", editor: "4", nb_players: 4 };
    const response = await GameService.post(data);
    console.log(response);

    expect(response).toStrictEqual({
      ...data,
      id: 4,
    });
  });

  it("Update game", async () => {
    const data = { id: 4, name: "jeu 4", editor: "4", nb_players: 4 };
    const response = await GameService.put(data);
    expect(response).toStrictEqual(data);
  });

  it("Delete Game", async () => {
    const id = 4;
    const response = await GameService.delete(id);
    expect(response).toBeUndefined();
  });
});
