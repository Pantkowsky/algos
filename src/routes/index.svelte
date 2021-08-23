<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Chooser from '$lib/chooser/Chooser.svelte'
	import Chart from '$lib/chart/Chart.svelte'

	$: entries = [...Array(100).keys()]

	$: bars = entries.reverse().map(function(v) {
        return {
            height: (v / entries.length) * 100,
            width: (100 / entries.length) * 100
        }
    })

	function shuffle() {
		const a = entries
    	for (let i = a.length - 1; i > 0; i--) {
    	    const j = Math.floor(Math.random() * (i + 1));
    	    [a[i], a[j]] = [a[j], a[i]];
    	}
    	entries = a
	}

	function sort() {
		entries = entries.sort(function(a, b) {
			return a - b
		})
	}

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Chooser/>
<Chart entries={bars}/>
<button on:click={shuffle}>Randomize</button>
<button on:click={sort}>Sort</button>
