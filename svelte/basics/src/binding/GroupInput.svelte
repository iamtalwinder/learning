<script>
    let scoops = 1;

    let menu = [
	'Cookies and cream',
	'Mint choc chip',
	'Raspberry ripple'
    ];

    let flavours = ['Mint choc chip'];


    function join(flavours) {
        if (flavours.length === 1) return flavours[0];

        return `${flavours.slice(0, -1).join(", ")} and ${flavours[flavours.length - 1]}`;
    }

</script>


<h1>Size</h1>

{#each [1, 2, 3] as scoop}
    <label>
        <input type=radio bind:group={scoops} value={scoop} >
        {scoop} scoop
    </label>
{/each}

<h1>Flavours</h1>

{#each menu as flavour}
    <label>
        <input type=checkbox bind:group={flavours} value={flavour} >
        {flavour}
    </label>
{/each}

{#if flavours.length === 0}
    <p>Please select a flavour</p>
{:else if scoops < flavours.length}
    <p>Can't order more flavours than scoops!</p>
{:else}
    <p>You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {join(flavours)}</p>
{/if}