<template>
  <div class="box">
    <img class="cho" :src="choose" @click="swi = !swi" alt="" />
    <img class="logo" :src="good.img" alt="" />
    <h3>{{ good.title }}</h3>
    <h5>￥{{ good.price }}</h5>

    <section>
      <button @click="good.number <= 1 ? good.number : good.number--">-</button>
      <input type="text" @blur="blur" v-model.number="good.number" />
      <button @click="good.number++">+</button>
    </section>
    <h1>总价：￥{{ total }}</h1>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      totals: 0,
      swi: false,
    };
  },
  props: ["good"],
  methods: {
    blur() {
      //失去焦点调用该方法
      if (this.good.number == "" || this.good.number < 1) {
        this.good.number = 1;
      }
    },
  },
  computed: {
    total() {
      this.totals = this.good.number * 1 * this.good.price;
      return this.totals.toFixed(2);
    },
    choose() {
      this.$emit("calculate");
      return this.swi ? "choose2.png" : "choose.png";
    },
  },
};
</script>

<style>
</style>