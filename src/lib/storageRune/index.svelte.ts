import { browser } from "$app/environment";
/*

export function useLocalStorage<T>(key: string, value: T) {
    let storage = $state<{ value: T }>({ value });

    if (browser) {
        const item = localStorage.getItem(key);
        console.log(item);
        if (item) storage.value = JSON.parse(item);
    }

    $effect(() => {
        localStorage.setItem(key, JSON.stringify(storage.value));
    })

    return storage;
}

*/

export class LocalStorage <T> {
    #value = $state<T>() as T;
    key = '';

    constructor(key: string, value: T) {
        this.key = key;
        this.#value = value;     
        if (browser) {
            const item = localStorage.getItem(key);
            if (item) {
                this.#value = this.deserialize(item);
            } else {
                localStorage.setItem(this.key, this.serialize(this.#value));
            }
        }
    }


    get value() {
        return this.#value;
    }

    set value(newValue) {
        this.#value = newValue;
        if (browser) {
            localStorage.setItem(this.key, this.serialize(this.#value));
        }
        this.#value = newValue;
    }

    serialize(value: T): string {
        return JSON.stringify(value);
    }

    deserialize(value: string): T {
        return JSON.parse(value);
    }

}
