import type { Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        const name = data.get('poke-name');
        console.log(name);
    }
} satisfies Actions;