<template>
    <v-card>
        <v-card-title primary-title>
            <div class="block">
                <h3 class="headline mb-0">Testing system</h3>
                <div>Hello, you have an opportunity to see what is your level of knowledge<br>
                    in any direction of IT.
                </div>
                <div>If you are with us for the first time, you can log in using your <br>
                    Google account.</div>
            </div>
        </v-card-title>
        <v-card-actions>
            <div class="block">
                <a @click="signIn()"
                   class="logo">
                    <img src="./../assets/google-logo.png">
                </a>
                <!--<v-btn flat color="orange">Explore</v-btn>-->
            </div>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    drawer: false,
    drawerRight: true,
    right: null,
    left: null,
    authUrl: 'http://127.0.0.1:8000/connect/google'
  }),
  props: {
    source: String
  },
  methods: {
    signIn: function () {
      let newWindow = window.open(this.authUrl,
        'Google OAuth2',
        'width=420,height=230,resizable=yes,scrollbars=yes,status=yes'
      )
      newWindow.focus()
      this.interval = setInterval(function () {
        if (newWindow.closed && localStorage.getItem('token').length > 0) {
          clearInterval(this)
          window.location.href = '#/directions'
        }
      }, 30
      )
    }
  }
}
</script>

<style>
    .block {
        width: 94%!important;
        padding: 3%!important;
        text-align: center!important;
    }
    .block .logo {
        display: inline-block;
    }
    .block .logo img {
        display: inline-block;
        width: 40px;
    }
</style>
