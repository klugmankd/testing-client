<template>
    <div></div>
</template>

<script>
export default {
  name: 'AuthRedirect',
  token: '',
  created () {
    this.token = JSON.parse(this.$route.params.token)
    this.$cookie.set('token', this.token)
    window.location.href = '#/directions'
    // this.$route.router.go('/directions')
    console.log(this.token)
  }
}
</script>

<style scoped>

</style>
