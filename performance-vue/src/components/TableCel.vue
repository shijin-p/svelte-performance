<template>
  <div class="row" :class="[color, item.disabled ? 'disabled' : '']">
    <div class="col">{{item.year}}</div>
    <div class="col">{{item.quarter}}</div>
    <div class="col">{{item.month}}</div>
    <div class="col">{{item.term}}</div>
    <div class="col clickable" @click="disableCountry(item.country)">
      {{item.country}}
    </div>
    <div class="col">{{item.total}}</div>
    <div class="col">
      <button @click="changeColor">change to {{nextColorColor()}}</button>
    </div>
  </div>
</template>

<script>
const colorList = ['white', 'red', 'blue', 'grey', 'white'];

export default {
  name: 'TableCel',
  props: {
    item: Object,
    disableCountry: Function
  },
  data() {
    return {
      color: 'white',
    }
  },
  methods: {
    changeColor() {
      const idx = colorList.indexOf(this.color);
      this.color = colorList[idx + 1];
    },

    nextColorColor() {
      const idx = colorList.indexOf(this.color);
      return colorList[idx + 1];
    },
  },
}
</script>

<style scoped>
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
