/**
    学习内容： Vuex 的使用
 */

<template>
    <div class="vuex">
        vuex {{ $store.state.count }}
        <button type="button" @click="increament" >增加</button>
        <button type="button" @click="decreament" >减少</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'VuexDemo',
  methods: mapActions([
      'increament',
      'decreament'
  ])
}
</script>

<style scoped>

</style>
