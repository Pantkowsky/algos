<script>
    // export let sorted
    export let isCurrent
    export let props = {}

    $: current = isCurrent == props.index
</script>

<div class="{current ? 'sorted' : 'default'}" id="{props.index}" style="height:{props.height}%; width:{props.width}%"/>

<style>

    .default {
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