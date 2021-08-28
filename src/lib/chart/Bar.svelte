<script>
    export let sorted
    export let dimensions = {}
</script>

<div class="{sorted ? 'sorted' : 'default'}" style="height:{dimensions.height}%;width:{dimensions.width}%"/>

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