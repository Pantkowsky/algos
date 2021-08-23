<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Chooser from '$lib/chooser/Chooser.svelte'
	import Chart from '$lib/chart/Chart.svelte'

	$: entries = [...Array(100).keys()]
	let entryNum = 1
	let chart

	$: entry = entryNum * 2

	$: bars = entries.reverse().map(function(v) {
        return {
			index: v,
            height: (v / entries.length) * 100,
            width: (100 / entries.length) * 100
        }
    })

	function sort() {
		entryNum = 2
	}

	function shuffle() {
		chart.shuffle()
	}

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{@debug entry}

<Chooser/>
<Chart bind:this={chart} entries={bars} current={entry}/>
<button on:click={shuffle}>Randomize</button>
<button on:click={sort}>Sort</button>
