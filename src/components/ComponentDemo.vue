/**
    学习内容： component 组件
 */

<template>
    <div class="component">
        child component {{name}}, age: {{age}}
      <button type="button" @click="$emit('patch')">发送到父组件</button>        
    </div>
</template>

<script>
export default {
  name: 'ComponentDemo',
  props: ['age'],

  data() {
   return {
       counter: 0,
       name: "com",
    }
  },
  methods: {
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
