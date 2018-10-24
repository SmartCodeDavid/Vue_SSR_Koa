/**
    学习内容： router - b
 */

<template>
    <div class="page-b">
        page b
        <router-link to="/pagea">go to a</router-link>
    </div>
</template>

<script>
export default {
  name: 'PageB',
  data() {
   return {
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
