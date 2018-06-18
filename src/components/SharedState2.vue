<template>
  <div>
    <input type="text" v-model="getShared">
    <button @click="updateShared('random value')">send: random value</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SharedState2',
  methods: {
    ...mapActions([
      'updateShared',
    ]),
  },
  computed: {
    ...mapGetters([
      'getShared',
    ]),
  },
};
</script>

<style scoped>

</style>
