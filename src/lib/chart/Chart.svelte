<script>
    import Bar from "./Bar.svelte"

    let index = 0
    let array = [...Array(200).keys()]
    
	$: bars = array.reverse().map(function(v) {
        return {
            index: v,
            height: (v / array.length) * 100,
            width: (100 / array.length) * 100
        }
    })
    $: entry = 0
    $: current = index

    export function sort() {
        
        var min, next
        min = index
        entry = array[array.length - index]

        for (next = index + 1; next < array.length; next++) {
            if(array[next] < array[min]) {
                min = next
            }
            swap(index, min)
        }

        index += 1
        setTimeout(sort, 20)

    }

    function swap(i, j) {
        var parent = document.getElementById('chart')
        var first = document.getElementById('' + i)
        var firstSibling = first.nextElementSibling
        var second = document.getElementById('' + j)

        parent.insertBefore(first, second)
        parent.insertBefore(second, firstSibling)

    }

    export function shuffle(a) {
    	for (let i = a.length - 1; i > 0; i--) {
    	    const j = Math.floor(Math.random() * (i + 1));
    	    [a[i], a[j]] = [a[j], a[i]];
    	}
	}

</script>

<div id="chart" class="container">
    {#each bars as entry}
        <Bar isCurrent={current} props={entry}/>
    {/each}
</div>

<style>

    .container {
        width: 100%;
        height: 600em;
        background-color: white;
        display: flex;
		flex-direction: row;
		justify-content: left;
        align-items: bottom;
        position: relative;
		flex: 1;
    }

</style>