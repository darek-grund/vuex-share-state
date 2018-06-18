<template>
  <div>
    <input type="text" v-model="getShared">
    <button @click="updateShared('shared value')">send: shared value</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SharedState1',
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
