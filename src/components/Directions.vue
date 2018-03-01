<template>
    <v-card>
        <v-list two-line>
            <template v-for="(item) in items">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-list-tile :to="item.path" avatar v-else :key="item.name">
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
  name: 'Directions',
  data: () => ({
    drawer: false,
    drawerRight: true,
    right: null,
    left: null,
    items: []
  }),
  props: {
    source: String
  },
  created () {
    this.errors = []
    axios.get('http://127.0.0.1:8000/api/directions')
      .then(response => {
        this.items = response.data
        for (let index = 0; index < this.items.length; index++) {
          this.items[index].avatar = './../assets/google-logo.png'
          this.items[index].path = '/directions/' + this.items[index].name
        }
        console.log(this.items)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>

</style>
