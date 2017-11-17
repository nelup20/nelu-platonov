<template>
  <div class="DivContactComponent">
    <h1>CONTACT</h1>
    <div class="container">
      <a href="https://www.linkedin.com/in/nelu-platonov-9b2823144/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
      <a href="https://github.com/nelup20" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
      <a href="https://stackoverflow.com/users/7815997/triseth" target="_blank"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
      </div>
      <div class="container">
      <a href="https://www.instagram.com/neluplatonov/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      <a href="mailto:nplatonovbusiness@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
      <i class="fa fa-skype skype" aria-hidden="true" @click="popup"></i>
      </div>
      <div class="skypeName" :style="show">Skype: platon.nelu@yahoo.com</div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      show: {
        opacity: "0",
        transition: "all 1s"
      }
    }
  },
  methods: {
    popup(){
      this.show.opacity === "0" ? this.show.opacity = "1" : this.show.opacity = "0"
    }
  }
}
    
</script>
<style scoped>
  h1{
    color: #327F32;
    font-family: 'Ubuntu', sans-serif;
    display: inline-block;
    margin: auto;
    margin-top: 3vh; 
  }
  .container{
    display: flex;
  }
  a{
    width: 7vw;
    margin-left: 19.5vw;
    margin-top: 9vw;
  }
  i{
    font-size: 7vw;
    color: black;
    padding: 0;
    transition: all 0.7s;
  }
  i:hover{
    color: #327F32;
    font-size: 8vw;
  }
  .skype{
    cursor: pointer;
    margin-top: 9vw;
    margin-left: 19.5vw
  }
  div{
    font-family: 'Roboto', sans-serif;
  }
  .skypeName{
    width: 17vw;
    margin-left: 68vw;
    margin-top: -9vw;
    opacity: 0;
    transition: all 1s;
  }
  @media (max-width: 450px){
    i{
      font-size: 13vw;
    }
    i:hover{
    color: #327F32;
    font-size: 14.5vw;
  }
  a{
    width: 14vw;
    margin-left: 13vw;
    margin-top: 19vw;
  }
  .skype{
    margin-top: 19vw;
    margin-left: 13vw
  }
  .skypeName{
    width: 100vw;
    margin-left: 0vw;
    margin-top: 20vw;
    opacity: 0;
    transition: all 1s;
  }
  .DivContactComponent{
    height: 80vh;
  }
  }
  @media (min-width: 768px) and (max-width: 1024px){
    i{
      font-size: 10vw;
    }
    i:hover{
    color: #327F32;
    font-size: 14.5vw;
  }
  a{
    width: 9vw;
    margin-left: 18.2vw;
    margin-top: 19vw;
  }
  .skype{
    margin-top: 19vw;
    margin-left: 18.2vw
  }
  .skypeName{
    width: 100vw;
    margin-left: 0vw;
    margin-top: 20vw;
    opacity: 0;
    transition: all 1s;
  }
  .DivContactComponent{
    height: 80vh;
  }
  }
</style>
