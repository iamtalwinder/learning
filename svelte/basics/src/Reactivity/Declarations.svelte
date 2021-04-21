<script>
    let count = 0;
    $: double = count * 2;

    function handleCount() {
        count++;
    }
</script>


<button on:click={handleCount}>Clicked {count} times</button>
<p>{count} double is {double}</p>