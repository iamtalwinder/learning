<script>
    import Inner from "./ComponentEventInner.svelte";


    function handleSayHello(event) {
        alert(event.detail.msg);
    }
</script>

<Inner on:sayHello={handleSayHello}/>