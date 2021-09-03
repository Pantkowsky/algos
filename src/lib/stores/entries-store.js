import { writable } from 'svelte/store'

function createArray() {

    const array = [...Array(200).keys()]
    const { subscribe, set, update } = writable(array)

    return {
        subscribe,
        shuffle: () => set(shuffle([...Array(200).keys()])),
        reset: () => set(array)
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
}

export let entries = createArray()