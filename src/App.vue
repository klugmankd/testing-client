<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar
              color="blue-grey"
              dark
              fixed
              app
              clipped-right
      >
        <v-toolbar-title>Toolbar</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <router-view/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-navigation-drawer
              right
              temporary
              v-model="right"
              fixed
      />
      <!--<v-footer color="blue-grey" class="white&#45;&#45;text" app>
        <span>Vuetify</span>
        <v-spacer/>
        <span>&copy; 2017</span>
      </v-footer>-->
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      drawerRight: true,
      right: null,
      left: null
    }
  },
  props: {
    source: String
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
