<script>
    let active = ''

</script>

<div>
    <button class:active="{ active === 'quicksort' }" on:click="{() => active = 'quicksort'}">QuickSort</button>
    <button class:active="{ active === 'mergesort' }" on:click="{() => active = 'mergesort'}">MergeSort</button>
    <button class:active="{ active === 'bubblesort' }" on:click="{() => active = 'bubblesort'}">BubbleSort</button>
    <button class:active="{ active === 'selectionsort' }" on:click="{() => active = 'selectionsort'}">SelectionSort</button>
</div>

<style>

    div {
        width: 100%;
        position: relative;
		height: 0;
		padding: 0 0 calc(100% * 100 / 2048) 0;
    }

    .active {
        background-color: coral;
        color: cornsilk;
    }
</style>