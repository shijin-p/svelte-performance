<script>
  import { getData } from './services/data.service';
  import RenderNumber from './RenderNumber.svelte';
  import TableCel from './TableCel.svelte';

  let show = false;
  let data = [];
  let number = 0;

  getData().then((response) => {
    response.forEach((item) => {
      item.disabled = false;
    });
    data = response.slice(0, 1000);
  });

  const toogleList = () => {
    show = !show;
  };

  const addCount = (quant) => {
    for (let i = 0; i < quant; i++) {
      number += 1;
    }
  };

  const disableCountry = (country) => {
    data = data.map((item) => {
      if (item.country === country) {
        item.disabled = !item.disabled;
      }
      return item;
    });
  };
</script>

<main>
  <RenderNumber {number} />
  <button on:click={() => addCount(1)}>add 1</button>
  <button on:click={() => addCount(10)}>add 10</button>

  <p>----</p>
  <div>Quantity: {data.length}</div>
  <button on:click={toogleList}>{show ? 'Hide' : 'Show'}</button>

  {#if show}
    <div class="main-table">
      <div class="row table-header">
        <div class="col">Quarter</div>
        <div class="col">Month</div>
        <div class="col">Term</div>
        <div class="col">Country</div>
        <div class="col">Total</div>
        <div class="col">Group</div>
        <div class="col">Action</div>
      </div>
      {#each data as item}
        <TableCel {item} {disableCountry} />
      {/each}
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
