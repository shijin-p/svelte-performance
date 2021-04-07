<template>
<div>
  <RenderNumber v-bind:number="number" />
  <button @click="addCount(1)">add 1</button>
  <button @click="addCount(10)">add 10</button>

  <p>----</p>
  <div>Quantity: {{data.length}}</div>
  <button @click="toogleList">{{show ? 'Hide' : 'Show'}}</button>

  <div class="main-table" v-if="show">
    <div class="row table-header">
      <div class="col">Year</div>
      <div class="col">Quarter</div>
      <div class="col">Month</div>
      <div class="col">Term</div>
      <div class="col">Country</div>
      <div class="col">Total</div>
      <div class="col">Action</div>
    </div>
    <TableCel v-for="(item, idx) in data" :key="idx" v-bind:item="item" v-bind:disableCountry="disableCountry" />
  </div>
</div>
</template>

<script>
import RenderNumber from './components/RenderNumber.vue'
import TableCel from './components/TableCel';
import { getData } from './services/data.service';

export default {
  name: 'App',
  components: {
    RenderNumber,
    TableCel
  },
  created: function () {
    getData().then((response) => {
      response.forEach((item) => {
        item.disabled = false;
      });
      this.data = response.slice(0, 1000);
    });
  },
  data() {
    return {
      number: 0,
      data: [],
      show: false,
    }
  },
  methods: {
    addCount(quant) {
      for (let i = 0; i < quant; i++) {
        this.number += 1;
      }
    },
    toogleList() {
      this.show = !this.show;
    },
    disableCountry(country) {
      this.data = this.data.map((item) => {
        if (item.country === country) {
          item.disabled = !item.disabled;
        }
        return item;
      });
    }

  },
}
</script>

<style>
#app {
  text-align: center;
}
</style>
