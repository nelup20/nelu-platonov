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
                 
                  <router-link @click.native="highlightRoute('Portfolio')" :class="{ highlight: routes.Portfolio }" to="/portfolio" class="routes"><i class="fa fa-code" aria-hidden="true"></i></router-link>
                  <router-link @click.native="highlightRoute('Skills')" :class="{ highlight: routes.Skills }" to="/skills" class="routes"><i class="fa fa-check-square" aria-hidden="true"></i>
</router-link>
                  <router-link @click.native="highlightRoute('About')" :class="{ highlight: routes.About }" to="/about" class="routes"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
</router-link>
                  <router-link @click.native="highlightRoute('Contact')" :class="{ highlight: routes.Contact }" to="/contact" class="routes"><i class="fa fa-envelope" aria-hidden="true"></i>
</router-link>
              </div>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                currentRoute: "",                     // This is the route that the user is currently on (wether by button or address bar)
                routes: {                              // These routes are simply to indicate which one is ACTIVE currently (for CSS class), nothing else.
                    Portfolio: false,
                    Skills: false,
                    About: false,
                    Contact: false,
                }
            }
        },
        methods: {
            highlightRoute(e){                      // Method to highlight clicked button via CSS class, always makes all buttons
                this.routes.Portfolio = false;      // not-highlighted then just sets the clicked button's route to true in this.routes
                this.routes.Skills = false;
                this.routes.About = false;
                this.routes.Contact = false;
                e === "Portfolio" ? this.routes.Portfolio = true : this.routes.Portfolio = false;
                e === "Skills" ? this.routes.Skills = true : this.routes.Skills = false;
                e === "About" ? this.routes.About = true : this.routes.About = false;
                e === "Contact" ? this.routes.Contact = true : this.routes.Contact = false;
            }
        },
        created(){                                      //Everytime the instance/component is created the current route gets stored
            this.currentRoute = this.$route.name;       // ! Useful for when opening in a new tab/via address bar
        },
        watch: {
            currentRoute: function(){               // Watches for changes in the current route via button or address bar
                this.currentRoute === "Portfolio" ? this.routes.Portfolio = true : this.routes.Portfolio = false;
                this.currentRoute === "Skills" ? this.routes.Skills = true : this.routes.Skills = false;
                this.currentRoute === "About" ? this.routes.About = true : this.routes.About = false;
                this.currentRoute === "Contact" ? this.routes.Contact = true : this.routes.Contact = false;
            }
        }
    }
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
        height: 100vh;
        background-color: rgba(100, 255, 100, 0.68);
    }
    h1{
        font-family: 'Ubuntu', sans-serif;
        margin: 0;
        color: white;
        margin-top: 8vh;
        font-size: 3vw;
    
    }
    h2{
        font-family: 'Ubuntu', sans-serif;
        color: white;
        font-size: 2.3vw;
        margin-top: -1vw
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 2vw;
        color: white;
    }
    #personalPic{
        border-radius: 50%;
        height: 16vh;
        margin-top: 12vh
    }
    .img{
        height: 100vh;
        width: 100vw;
    }
    #intro{
        margin-top: 10vh;
    }
    #intro p{
        margin: 0;
        text-shadow: 0.025vh 0.025vh black
    }
    #navigation{
        margin-top: 17.8vh;
    }
    .routes{
        padding: 2vw;
        padding-bottom: 3.6vh;
        margin: 2.2vw;
        color: white;
        font-size: 3vw;
        border-radius: 8%;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius: 0%;
        transition: 0.25s; /* delays for 1 second */
       -webkit-transition: 0.25s; /* for Safari & Chrome */
        
    }
    .routes:hover{
       color: black;
       background-color: white;

        
    }
    .highlight{
        color: black;
       background-color: white;
    }
@media(max-width: 450px){
    h1{
        font-size: 6vw;
    }
    h2{
        font-size: 4.6vw;
    }
    p{
        font-size: 5vw;
       display: inline;
    }
    .routes{
        padding-bottom: 1.6vw;
        font-size: 5vw;
    }
    #navigation{
        margin-top: 17.8vw;
    }
}

@media (min-width: 768px) and (max-width: 1024px){
    h1{
        font-size: 6vw;
    }
    h2{
        font-size: 4.2vw;
    }
    p{
        font-size: 3.5vw;
       display: inline;
    }
    .routes{
        padding-bottom: 1.6vw;
        font-size: 5vw;
    }
    #navigation{
        margin-top: 27.6vh;
    }
}
</style>
