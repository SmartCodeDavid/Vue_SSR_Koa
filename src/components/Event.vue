/**
    学习内容： event
 */

<template>
    <div class="events">
        <!-- 普通的事件定义 -->
        <button type="button" name="button" @click="msg">test</button>
        
        <!-- 内联事件处理 -->
        <button type="button" name="button" @click="counter += 1">counter + 1</button>
        
        <!-- 为事件添加函数和参数 -->
        <button type="button" name="button" @click="msg2('s')">事件-函数-传参</button>
        
        <!-- 事件获取当前事件的对象dom -->
        <button type="button" name="button" @click="msg3('s', $event)">事件-函数-传参-获取当前事件结点</button>

        <br>

        <!-- 事件修饰符 -->
        <div class="parent" @click="parent">
            <p>parent</p>
            <p>parent</p>
            <p>parent</p>
            <div class="child" @click="child">
                child
            </div>

            <!-- 阻止冒泡 -->
            <div class="child" @click.stop="child"> 
                child2
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    showInfo: String,
    show: Boolean,  
  },
  data() {
   return {
       counter: 0,
    }
  },
  methods: {
      msg () {
          window.console.log(Math.random());
      },
      msg2 (a) {
          window.console.log(Math.random(), a);
      },
      msg3 (a, b) {
          window.console.log(Math.random(), a, b);
      },
      parent () {
          window.console.log("parent");
      },
      child () {
          window.console.log("child");
      },
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
