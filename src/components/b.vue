/**
    学习内容： vuex -- a  高级用例
 */

<template>
    <div class="b">
        page b {{ $store.state.count.count }}
        <button type="button" @click="add(2)">增加2</button>
        <button type="button" @click="reduce(2)">减少2</button>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'VuexPageB',
  methods: mapActions('count',['add', 'reduce'])
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
