/**
    学习内容： router - a
 */

<template>
    <div class="page-a">
        page a
        <router-link to="/pageb">go to b</router-link>
    </div>
</template>

<script>
export default {
  name: 'PageA',
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
