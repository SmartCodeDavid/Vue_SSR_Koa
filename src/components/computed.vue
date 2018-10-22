/**
    学习内容： computed 计算属性
 */

<template>
  <div id="example">
    你借我{{money}}, 还了{{pay}}, 还剩下{{left}}
  </div>
</template>

<script>
export default {
  name: 'Computed',
  props: {

  },
  data() {
    return {
      message: "hello world",
      money: 1000,
      pay:0,
    }
  },

  computed: {
      left () {
        return this.money - this.pay;
      },
  },

  methods: {
   setTimeInterval() {
      let id = setInterval(function(){
        this.pay += 1;
        if(this.money === this.pay) {
          clearInterval(id);
        }
      }.bind(this), 10);
    }
  },

  mounted() {
    this.setTimeInterval();
  }
}
</script>

<style scoped>

</style>
