/**
    学习内容： router - default
 */

<template>
    <div class="page-b">
        Page Default
        <router-link to="/pagea">go to a</router-link><br>
        <router-link to="/pageb">go to b</router-link>
    </div>
</template>

<script>
export default {
  name: 'PageDefault',
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
