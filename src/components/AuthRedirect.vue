<template>
    <div></div>
</template>

<script>
export default {
  name: 'AuthRedirect',
  token: '',
  created () {
    this.token = this.$route.params.token
    this.$cookie.set('token', this.token)
    localStorage.setItem('token', this.token)
    window.close()
  }
}
</script>

<style scoped>

</style>
