<template>
  <div class="footer">
      <div>
      <h3>This is an old portfolio site. I'm currently not interested in new opportunities/jobs. </h3>
      </div>
  </div>
</template>
<script>

</script>
<style scoped>

    div{
        margin-top: 15vh;
        font-family: 'Ubuntu', sans-serif;
        color: #7a7e82;
    }
    .footer{
        height: 35vh;
    }
    @media (max-width: 450px) {
        div{
            font-size: 4vw;
            width: 80vw;
            margin: 0 auto;
        }
    }
    @media (min-width: 768px) and (max-width: 1024px){
        .footer{
            height: 50vh;
        }
    }
    @media (min-width: 1280px){
        .footer{
            width: 100vw;
        }
    }
</style>
