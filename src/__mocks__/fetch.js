const getAllMocaked = [
    {
      id: "1",
      name: "jeu 1",
      editor: "editeur 1",
      nb_players: 1
    },
    {
      id: "2",
      name: "jeu 2",
      editor: "editeur 2",
      nb_players: 2
    },
    {
      id: "3",
      name: "jeu 3",
      editor: "editeur 3",
      nb_players: 3
    }
  ];

const getMocaked =     {
  id: "1",
  name: "jeu 1",
  editor: "editeur 1",
  nb_players: 1
}

global.fetch = jest.fn((url, options) => {
  const urlLastChar = url.slice(-1)
  const lastOneIsInt = !isNaN(parseInt(urlLastChar))
  // Methode Get 
  if(options.method == "GET" && lastOneIsInt){
      return Promise.resolve({
        json: () => Promise.resolve(getMocaked)
      })
  }else if(options.method == "GET"){
    return Promise.resolve({
      json: () => Promise.resolve(getAllMocaked)
    })
  }
  //  Methode Post
  if(options.method == 'POST'){
    const requestBodyData = JSON.parse(options.body);
    return Promise.resolve({
      json: () => Promise.resolve({
        ...requestBodyData,
        id: 4
      })
    })
  }
  // Methode Put
  if(options.method == 'PUT'){
    const requestBodyData = JSON.parse(options.body);
    return Promise.resolve({
      json: () => Promise.resolve(requestBodyData)
    })
  }

  if (options.method === "DELETE") {
    return Promise.resolve({
      json: () => Promise.resolve(options.body) // Renvoyer le corps de la requête tel quel
    });
  }


});