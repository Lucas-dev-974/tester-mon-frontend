import { ItemProps } from "../components/molecul/table/TableRow.jsx";

class GameService {
  private static instance: GameService;
  host: string;

  constructor() {
    this.host = "http://127.0.0.1:8000/api/game";
  }

  public static getInstance(): GameService {
    if (!GameService.instance) {
      GameService.instance = new GameService();
    }

    return GameService.instance;
  }

  public async getAll() {
    return await (await fetch(this.host, { method: "GET" })).json();
  }

  public async get(id: number) {
    return await (await fetch(this.host + "/" + id, { method: "GET" })).json();
  }

  public async post(data: {
    name: string;
    editor: string;
    nb_players: number;
  }) {
    const response = await fetch(this.host, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  public async put(data: ItemProps) {
    const id = data.id;
    const response = await fetch(`${this.host}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  public async delete(id: number) {
    const response = await fetch(`${this.host}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  }
}

const instance = GameService.getInstance();

export default instance;
