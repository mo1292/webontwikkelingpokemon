import { Player, DetailedPokemon } from './interfaces';
import { MongoClient } from "mongodb";
import 'dotenv/config';

let localPlayers: Player[] = [];
let genOne: DetailedPokemon[] = [];
const uri = `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority`;
let client = new MongoClient(uri);

export function getClient() {
    return client;
}

export function setClient(newClient: MongoClient) {
    client = newClient;
}

export function getPlayers(): Player[] {
    return localPlayers;
}

export function setPlayers(players: Player[]) {
    localPlayers = players;
}

export function getPokemon(): DetailedPokemon[] {
    return genOne;
}

export function setPokemon(pokemon: DetailedPokemon[]) {
    genOne = pokemon.sort((a, b) => a.id - b.id);
}

// export { client };