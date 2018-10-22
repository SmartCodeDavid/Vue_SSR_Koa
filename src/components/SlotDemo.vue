/**
    学习内容： component -- slot
 */

<template>
    <div class="component">
        <!-- slot -->
        <slot></slot>
        <slot name="top"></slot>
        <p>中间一些东西..</p>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
export default {
  name: 'ComponentDemo',

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
