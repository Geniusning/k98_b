<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import { mapMutations,mapGetters } from 'vuex' 

export default {
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    increment () {
      // store.commit('increment');
      this.addCount();
    },
    decrement () {
     this.minusCount();
    },
    ...mapMutations({
      addCount:"ADD",
      minusCount:"MINUS"
    })
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
