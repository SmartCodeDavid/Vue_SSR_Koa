<template>
<div>
  <div class="hello">
    <h1 :id="id">{{ msg }}</h1>
    <div v-html="msg"></div>
  </div>
  <div class="number">
    {{number + 1}}
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
   return {
      msg1: "<span style='color:red'>hello..world</span>",
      id: "h1",
      number: 100
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
