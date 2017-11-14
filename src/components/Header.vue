<template>
  <div class="area">
      <div class="img">
          <div class="colorOverlay">
                <img src="../assets/personalPic.jpg" alt="" id="personalPic">
              <div>
              <h1>FULL - STACK</h1><br>
              <h2>WEB DEVELOPER</h2>
              <div>
                  <div id="intro">
              <p>Hi! I'm Nelu Platonov, a passionate self-taught web developer.</p>
              <p>You can navigate below to my portfolio, skills, about and contact page.</p>
              <p>Thanks for stopping by and have a wonderful day <i class="fa fa-smile-o" aria-hidden="true"></i></p>
              </div>
              <div id="navigation">
                  <router-link to="/portfolio" class="routes"><i class="fa fa-code" aria-hidden="true"></i></router-link>
                  <router-link to="/skills" class="routes"><i class="fa fa-check-square" aria-hidden="true"></i>
</router-link>
                  <router-link to="/about" class="routes"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
</router-link>
                  <router-link to="/contact" class="routes"><i class="fa fa-envelope" aria-hidden="true"></i>
</router-link>
              </div>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
    
</script>
<style scoped>
    .area{
        height: 100vh;
        width: 100vw;
       
    }
    .img{
        height: 80vh;
        width: 100vw;
        background-image: url("../assets/background-code.jpg");
        background-size: cover;
        background-repeat: no-repeat
    }
    .colorOverlay{
        width: 100vw;
        height: 80vh;
        background-color: rgba(100, 255, 100, 0.68);
    }
    h1{
        font-family: 'Ubuntu', sans-serif;
        margin: 0;
        color: white;
        margin-top: 4vh;
        font-size: 4.5vw;
    
    }
    h2{
        font-family: 'Ubuntu', sans-serif;
        margin-top: -3vw;
        color: white;
        font-size: 4vw
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 3vw;
        color: white;
    }
    #personalPic{
        border-radius: 50%;
        height: 10vh;
        margin-top: 12vh
    }
    #intro{
        margin-top: 10vh;
    }
    #intro p{
        margin: 0;
        text-shadow: 0.025vh 0.025vh black
    }
    #navigation{
        margin-top: 14vh;
    }
    .routes{
        padding: 2vw;
        padding-bottom: 4.1vw;
        margin: 2.2vw;
        color: white;
        font-size: 3vw;
        border-radius: 8%;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius: 0%;
        
    }
    .routes:hover{
       color: black;
       background-color: white;
        
    }

@media(min-width: 700px){
    h1{
        margin-top: 8vh;
        font-size: 3vw;
    }
    h2{
        font-size: 2.3vw;
        margin-top: -1vw
    }
    p{
        font-size: 2vw;
    }
    .img{
        height: 100vh;
        width: 100vw;
    }
    .colorOverlay{
        width: 100vw;
        height: 100vh;
    }
    #personalPic{
        height: 16vh;
        margin-top: 12vh
    }
}
</style>
