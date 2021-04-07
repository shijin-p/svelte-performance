<script>
  export let item;
  export let disableCountry;

  const colorList = ['white', 'red', 'blue', 'grey', 'white'];
  let color = 'white';

  const changeColor = () => {
    const idx = colorList.indexOf(color);
    color = colorList[idx + 1];
  };

  const nextColorColor = () => {
    const idx = colorList.indexOf(color);
    return colorList[idx + 1];
  };
</script>

<div class={`row ${color}${item.disabled ? ' disabled' : ''}`}>
  <div class="col">{item.quarter}</div>
  <div class="col">{item.month}</div>
  <div class="col">{item.term}</div>
  <div
    class="col clickable"
    on:click={() => {
      disableCountry(item.country);
    }}
  >
    {item.country}
  </div>
  <div class="col">{item.country}</div>
  <div class="col">{item.group}</div>
  <div class="col">
    <button on:click={changeColor}>change to {nextColorColor()}</button>
  </div>
</div>

<style>
  .red {
    background-color: red;
  }

  .blue {
    background-color: blue;
  }

  .grey {
    background-color: grey;
  }

  .white {
    background-color: white;
  }

  .disabled {
    background-color: lightgrey;
    color: grey;
  }
</style>
