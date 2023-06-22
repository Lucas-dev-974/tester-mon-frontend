import 'whatwg-fetch'
const fetch = window.fetch

class GameService {
    private static instance: GameService;
    host: string;

    constructor(){
        this.host = 'http://127.0.0.1:8000/api/game'
    }

    public static getInstance(): GameService{
        if(!GameService.instance){
            GameService.instance = new GameService()
        }

        return GameService.instance
    }

    public async getAll(){
        return await (await fetch(this.host, {method: "GET"})).json()
    }

    public async get(){
        return await (await fetch(this.host + "/1", {method: "GET"})).json()
    }
}   

const instance = GameService.getInstance();

export default instance;