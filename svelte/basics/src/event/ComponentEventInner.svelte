<script>

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("sayHello", {msg: "Hello!"});
    }
</script>

<button on:click={handleClick}>Click me</button>