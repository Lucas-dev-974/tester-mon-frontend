import GameService from '../services/gameFetch'


describe('TEST API', () => {
  test('renvoie un format JSON valide', async () => {
    const response = await GameService.get()
    console.log(response);
    
    // Vérifie que la réponse est un objet JSON
    expect(typeof response).toBe('object');

    // Vérifie que la réponse contient les propriétés attendues
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('name');
    expect(response).toHaveProperty('editor');
    expect(response).toHaveProperty('nb_players');

    // // Vérifie le type de chaque propriété
    // expect(typeof response.id).toBe('number');
    // expect(typeof response.name).toBe('string');
    // expect(typeof response.editor).toBe('string');
    // expect(typeof response.nb_players).toBe('number');
    
  });
});