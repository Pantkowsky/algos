<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Chooser from '$lib/chooser/Chooser.svelte'
	import Chart from '$lib/chart/Chart.svelte'
	import { entries } from "$lib/stores/entries-store"

	let chart
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Chooser/>
<Chart bind:this={chart} array={$entries}/>
<button on:click={entries.shuffle}>Randomize</button>
<button on:click={chart.sort}>Sort</button>
