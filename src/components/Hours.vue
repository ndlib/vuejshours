<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="hours">
      {{ hours.json }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'hours',
  created () {
    this.$store.dispatch('fetchHours')
  },
  computed: {
    ...mapGetters({
      hours: 'getHours'
    })
  },
  data () {
    return {
      loading: !this.$store.state.hours.loaded,
      hours: this.$store.state.hours.json
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
