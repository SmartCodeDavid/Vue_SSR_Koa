/**
    学习内容： class style属性使用
 */

<template>
    <div>
        <div id="example" :class="[a1, a2]">
            学习内容： class style属性使用
        </div>

        <div id="example" :class="{'test-1':a3}">
            学习内容： class style属性使用
        </div>

        <div id="example" :class="obj">
           style obj -- 推荐用这种方式操作
        </div>
    </div>
</template>

<script>
export default {
  name: 'Style',
  props: {

  },
  data() {
    return {
      message: "hello world",
      money: 1000,
      pay:0,
      a1: "test-1",
      a2: "test-2",
      a3: false,
      obj: {
          'test-1' : true
      }
    }
  },
}
</script>

<style scoped>

</style>
