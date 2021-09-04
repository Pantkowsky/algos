import { writable } from 'svelte/store'

function createArray() {

    const SIZE = 100
    const array = [...Array(SIZE).keys()]
    const { subscribe, set, update } = writable(array.reverse())

    return {
        subscribe,
        shuffle: () => set(shuffle([...Array(SIZE).keys()])),
        swap: (i, j) => update(arr => swap(arr, i, j)),
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

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

export let entries = createArray()