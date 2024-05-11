import type { Actions } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";

// function to fetch pokemon data

const pokemon = {
    name: 'Pikachu',
}

console.log(pokemon.name);
console.log(pokemon['name']);

type GetPokemon = (name: string) => unknown;

const getPokemon: GetPokemon = (name) => {

}


export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        const name = data.get('poke-name');
        console.log(name);
        return {
            success: true,
            name
        };
    }
} satisfies Actions;