<template>
  <div class="DivContactComponent">
    <h1>CONTACT</h1>
    <div class="container">
      <a href="https://www.linkedin.com/in/nelu-platonov-9b2823144/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
      <a href="https://github.com/nelup20" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
      </div>



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
    width: 7vw;
    opacity: 0;
    transition: all 1s;
    position: relative;
    top: 6vw;
    left: -8vw;
  }
  @media (max-width: 640px){
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
    margin-top: 5vh;
    opacity: 0;
    transition: all 1s;
  }
  .DivContactComponent{
    height: 80vh;
  }
  }
  @media (min-width: 480px) and (max-width: 600px){
    .DivContactComponent{
    height: 65vh;
  }
  }
  @media (min-width: 768px) and (max-width: 1024px){
    i{
      font-size: 9vw;
    }
    i:hover{
    color: #327F32;
    font-size: 11.5vw;
  }
  a{
    width: 9vw;
    margin-left: 18.2vw;
    margin-top: 13vw;
  }
  .skype{
    margin-top: 13vw;
    margin-left: 18.2vw
  }
  .skypeName{
    width: 100vw;
    margin-left: 0vw;
    margin-top: 6vh;
    opacity: 0;
    transition: all 1s;
  }
  .DivContactComponent{
    height: 70vh;
  }
  }
  @media (min-width: 1024px) and (max-width: 1300px){
    i{
      font-size: 9vh;
    }
    i:hover{
    color: #327F32;
    font-size: 11.5vh;
  }
  a{
    width: 9vw;
    margin-left: 18.2vw;
    margin-top: 12vh;
  }
  .skype{
    margin-top: 12vh;
    margin-left: 18.2vw
  }
  .skypeName{
    width: 100vw;
    margin-left: 0vw;
    margin-top: 6vh;
    opacity: 0;
    transition: all 1s;
  }
  .DivContactComponent{
    height: 70vh;
  }
  }
  @media (min-width: 1280px){
    .DivContactComponent{
      width: 100vw;
      height: 40vw;
    }
  }
</style>
