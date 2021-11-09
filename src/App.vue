<template>
  <div id="app">
    <button @click="allChoose('1')">全选</button>
    <button @click="allChoose('2')">反选</button>
    <Student
      v-for="(item, index) in goods"
      :key="index"
      :good="item"
      :ref="'cell' + index"
      @calculate="calculate"
    >
    </Student>

    <h1>总价：￥{{ totalPrice }}</h1>
  </div>
</template>

<script>
import Student from './components/Student'
export default {
  name: "app",
  components:{Student},
  data() {
    return {
      totalPrice: 0,
      goods: [
        {
          title: "佛跳墙",
          price: 88.88,
          number: 1,
          img: "佛跳墙.jpg",
        },
        {
          title: "翠堂菜拼金钱袋",
          price: 66.66,
          number: 1,
          img: "翠堂菜拼金钱袋.jpg",
        },
        {
          title: "果仁鸳鸯虾球",
          price: 55.55,
          number: 1,
          img: "果仁鸳鸯虾球.jpg",
        },
        {
          title: "海皇三鲜煎面",
          price: 11.11,
          number: 1,
          img: "海皇三鲜煎面.jpg",
        },
        {
          title: "黑醋法国鹅肝",
          price: 22.22,
          number: 1,
          img: "黑醋法国鹅肝.jpg",
        },
        {
          title: "家乡葱油饼",
          price: 33.33,
          number: 1,
          img: "家乡葱油饼.jpg",
        },
        {
          title: "金奖鳗鱼酥",
          price: 44.44,
          number: 1,
          img: "金奖鳗鱼酥.jpg",
        },
        {
          title: "上汤龙虾",
          price: 77.77,
          number: 1,
          img: "上汤龙虾.jpg",
        },
        {
          title: "深海金枪鱼",
          price: 99.99,
          number: 1,
          img: "深海金枪鱼.jpg",
        },
        {
          title: "野生水鱼焖鲍鱼鸡",
          price: 99.0,
          number: 1,
          img: "野生水鱼焖鲍鱼鸡.jpg",
        },
        {
          title: "佛跳墙",
          price: 88.88,
          number: 1,
          img: "佛跳墙.jpg",
        },
        {
          title: "翠堂菜拼金钱袋",
          price: 66.66,
          number: 1,
          img: "翠堂菜拼金钱袋.jpg",
        },
        {
          title: "果仁鸳鸯虾球",
          price: 55.55,
          number: 1,
          img: "果仁鸳鸯虾球.jpg",
        },
        {
          title: "海皇三鲜煎面",
          price: 11.11,
          number: 1,
          img: "海皇三鲜煎面.jpg",
        },
        {
          title: "黑醋法国鹅肝",
          price: 22.22,
          number: 1,
          img: "黑醋法国鹅肝.jpg",
        },
        {
          title: "家乡葱油饼",
          price: 33.33,
          number: 1,
          img: "家乡葱油饼.jpg",
        },
        {
          title: "金奖鳗鱼酥",
          price: 44.44,
          number: 1,
          img: "金奖鳗鱼酥.jpg",
        },
        {
          title: "上汤龙虾",
          price: 77.77,
          number: 1,
          img: "上汤龙虾.jpg",
        },
        {
          title: "深海金枪鱼",
          price: 99.99,
          number: 1,
          img: "深海金枪鱼.jpg",
        },
        {
          title: "野生水鱼焖鲍鱼鸡",
          price: 99.0,
          number: 1,
          img: "野生水鱼焖鲍鱼鸡.jpg",
        },
      ],
    };
  },
  methods: {
    allChoose(sta) {
      // 1.找到所有子组件
      // console.log(this.$refs)

      // 2.找到组件的选中状态
      // 3.将其状态修改改为true
      for (const key in this.$refs) {
        console.log(this.$refs);
        if (sta == "1") {
          this.$refs[key][0].swi = true;
        } else if (sta == "2") {
          this.$refs[key][0].swi = !this.$refs[key][0].swi;
        }
      }
    },
    calculate() {
      console.log("jisuan");

      //计算总价格
      let num = 0;
      for (const key in this.$refs) {
        if (this.$refs[key].swi) {
          num += this.$refs[key].totals;
        }
      }
      this.totalPrice = num.toFixed(2);
    },
  },
};
</script>

<style>
#app {
  width: 50%;
  margin: 0 auto;
  background-color: gainsboro;
  padding: 20px;
}
.box {
  width: 100%;
  height: 150px;
  background-color: #fff;
  position: relative;
  margin: 5px 0;
}
.box > .cho {
  width: 1.625rem /* 26/16 */;
  height: 1.625rem /* 26/16 */;
  left: 15px;
  top: calc(50% - 13px);
}
.box > .logo {
  width: 7.5rem /* 120/16 */;
  height: 7.5rem /* 120/16 */;
  left: 56px;
  top: 15px;
}
.box > * {
  position: absolute;
}
.box h1 {
  right: 10px;
  line-height: 110px;
  color: red;
  font-size: 1.2rem;
}
.box h3 {
  left: 191px;
}
.box h5 {
  left: 191px;
  top: 40px;
  color: red;
}
.box section {
  left: 191px;
  bottom: 30px;
  width: 130px;
  z-index: 1;
}
.box section input {
  width: 30px;
  text-align: center;
}
</style>