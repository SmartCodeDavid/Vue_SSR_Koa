/**
    学习内容： if else 
 */

<template>
<div v-if="show">
  <div class="hello">
    <h1 :id="id">{{ showInfo }}</h1>
    <div v-html="msg"></div>
  </div>
  <div class="number">
    {{number + 1}}
  </div>
    <div v-n="4"></div>

    <ul>
      <li v-for="(item, index) in list" :key="item">
        {{item}}, {{index}}
      </li>
    </ul>

    <!-- 分组 teamplate 的使用 -->
    <ul>
      <template v-for="item in list">
        <li :key="item + ' hello'">hello</li>
        <li :key="item">{{item}}</li>
      </template>
    </ul>
</div>

<div v-else>
    这个组件被隐藏了
</div>

</template>

<script>
export default {
  name: 'GeneralInstruction',
  props: {
    msg: String,
    showInfo: String,
    show: Boolean,  
  },
  data() {
   return {
      msg1: "<span style='color:red'>hello..world</span>",
      id: "h1",
      number: 100,
      list: ['a','b','c','d'],
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
