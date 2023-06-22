const MOCK_GAME = [
    {
      id: "1",
      name: "jeu 1",
      editor: "editeur 1",
      nb_player: 1
    },
    {
      id: "2",
      name: "jeu 2",
      editor: "editeur 2",
      nb_player: 2
    },
    {
      id: "3",
      name: "jeu 3",
      editor: "editeur 3",
      nb_player: 3
    }
  ];

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_GAME)
}));