<script>
    export let entries
    export let current

    export function shuffle() {
		const a = entries
    	for (let i = a.length - 1; i > 0; i--) {
    	    const j = Math.floor(Math.random() * (i + 1));
    	    [a[i], a[j]] = [a[j], a[i]];
    	}
        entries = a
	}

    function move(node, { speed = 2000 }) {
        return {
            speed, 
            tick: t => {
                const parent = document.getElementById('parent')
                var oldChild = parent.childNodes[0]
                var newChild = parent.childNodes[current]

                newChild.parentNode.insertBefore(newChild, oldChild)
            }
        }
    }
</script>

{@debug current}
{@debug entries}

<div id="parent" class="container">
   {#each entries as entry}
    {#if current == entry.index}
        <div in:move class="sorted" style="height:{entry.height}%; width:{entry.width}%"/>
    {:else}
        <div class="bar" style="height:{entry.height}%; width:{entry.width}%"/>
    {/if}
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
    
    .sorted {
        width: 1%;
        margin-top: 3px;
        margin-left: 1px;
        background-color: rgb(250, 109, 139);
        position: relative;
        align-self: baseline;
        display: flex;
    }
</style>