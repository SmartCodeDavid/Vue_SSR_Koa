<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="<span style='color:red'>hello..world</span>"/> -->
    <!-- <general-instruction :show="false" :showInfo="'information1'"></general-instruction> -->
    <!-- <general-instruction :show="true" :showInfo="'information2'"></general-instruction>  -->
    <!-- <computed></computed>-->
     <!-- <Style></Style>  -->
     <!-- <event></event> -->
     <!-- <component-demo :age="age" @patch="patch"></component-demo> -->
     
     <slot-demo>
       <h1>我要加东西</h1>
       <h1 slot="top">我要加东西1</h1>
       <h1 slot="bottom">我要加东西2</h1>
     </slot-demo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GeneralInstruction from './components/GeneralInstruction.vue'
import Computed from './components/computed.vue'
import Style from './components/Style.vue'
import Event from './components/Event.vue'
import ComponentDemo from './components/ComponentDemo.vue'
import SlotDemo from './components/SlotDemo.vue'


import './components/n.js'

export default {
  name: 'app',
  components: {
    HelloWorld,
    GeneralInstruction,
    Computed,
    Style,
    Event,
    ComponentDemo,
    SlotDemo,
  },
  data() {
    return {
      age: 18,
    }
  },
  methods: {
    patch () {
      window.console.log('收到子组件信息');
      this.age++;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
