<script>
    export let entries

</script>

<div class="container">
   {#each entries as entry}
    <div class="bar" style="height:{entry.height}%; width:{entry.width}%"/>
    <!-- <div class="bar" style="height:{entry}%;"/> -->
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

    .bar {
        width: 1%;
        margin-top: 3px;
        margin-left: 1px;
        background-color: rgb(109, 158, 250);
        position: relative;
        align-self: baseline;
        display: flex;
    }
</style>