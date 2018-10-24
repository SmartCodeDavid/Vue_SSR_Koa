/**
    学习内容： vuex -- a  高级用例
 */

<template>
    <div class="a">
        page a {{ $store.state.money.money }}
        <button type="button" @click="add">增加</button>
        <button type="button" @click="reduce">减少</button>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'VuexPageA',
  methods: mapActions('money',['add', 'reduce'])
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
