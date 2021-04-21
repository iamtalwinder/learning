<script>
    let count = 0;

    function handleCount() {
        count++;
    }
</script>


<button on:click={handleCount}>Clicked {count} times</button>