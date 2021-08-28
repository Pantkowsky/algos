<script>
    import Bar from "./Bar.svelte"

    let counter = 0
    let array = [...Array(100).keys()]
	$: bars = array.reverse().map(function(v) {
        return {
            index: v,
            height: (v / array.length) * 100,
            width: (100 / array.length) * 100
        }
    })
    $: entry = 0
    $: current = counter + 1

	export function sort() {
		entry = array[array.length - counter]
		counter += 1
	}

    export function shuffle() {
		const a = array
    	for (let i = a.length - 1; i > 0; i--) {
    	    const j = Math.floor(Math.random() * (i + 1));
    	    [a[i], a[j]] = [a[j], a[i]];
    	}
        array = a
	}

    /**
    * @param {HTMLDivElement} node
    */
    function move(node, { speed = 2000, index }) {
        return {
            speed, 
            tick: t => {
                var parent = document.getElementById('chart')
                console.log(parent.childNodes)
                var oldChild = parent.firstElementChild

                parent.insertBefore(node, oldChild)
            }
        }
    }

</script>

<div id="chart" class="container">
    {#each bars as entry}
        <Bar sorted={current == entry.index} dimensions={entry}/>
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