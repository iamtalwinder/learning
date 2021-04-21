<script>
    let count = 0;

    function handleCount() {
        count++;
    }

    $: {
        console.log(count);
    }

    $: if (count > 10) {
        alert("Count is high!");
    }
</script>


<button on:click={handleCount}>Clicked {count} times</button>