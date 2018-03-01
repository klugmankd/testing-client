<template>
    <v-card>
        <h4>{{ direction }}</h4>
        <v-list two-line>
            <template v-for="(item) in difficulties">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-list-tile :to="item.name" avatar v-else :key="item.name">
                    <v-list-tile-avatar>
                        <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.name"/>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Direction',
  data () {
    return {
      drawer: false,
      drawerRight: true,
      right: null,
      left: null,
      difficulties: [],
      direction: '',
      user: {}
    }
  },
  props: {
    source: String
  },
  created () {
    this.errors = []
    axios.get('http://127.0.0.1:8000/api/directions/' + this.$route.params.name)
      .then(response => {
        this.direction = response.data.direction
        this.difficulties = response.data.difficulties
        for (let index = 0; index < this.difficulties.length; index++) {
          this.difficulties[index].avatar = './../assets/google-logo.png'
          this.difficulties[index].path = '/test/'
        }
        console.log(this.difficulties)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>

</style>
