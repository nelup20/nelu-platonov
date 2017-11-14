<template>
  <div >
    <h2>PORTFOLIO</h2>
      <div>
        Site 1
      </div>
      <div>
        <div class="techUsedBar" :style="expandBar"  @click="activate">
        <span id="barTitle">Technologies Used</span>
        <i class="fa fa-plus-circle" aria-hidden="true" :class="{ 'fa fa-minus-circle' : active }"></i>
       <div class="expandTech" :style="showTech">
          <div>Front-end: <img src="../../assets/vueLogo.png" alt="" class="logo">, <img src="../../assets/htmlLogo.png" alt="" class="logo"> , Meme.js</div>
           <div>Back-end: Haskell, C++, NickSQL</div>
           <div>Development: Webpack, Babel</div>
       </div>
        </div>
      </div>
      <h2>FREELANCE JOBS</h2>
      <div>
        Site 1
      </div>
  </div>
</template>


<script>
    export default {
      data(){
        return {
          active: false,
          expandBar: {
            height: "1.6vw",
            transition: "height 0.3s"
          },
          showTech: {
            opacity: "0",
            display: "none",
            transition: 'display 0.2s'
          },
          usedTech: {
            frontEnd: {
              html: true,
              css: true,
              javascript: true,
              vue: true,
            },
            backEnd: {

            },
            development: {

            }
          }
        }
      },
      methods: {
        activate(){
          this.active = !this.active;
          this.active ? this.expandBar.height = "10.5vw" : this.expandBar.height = "1.6vw";
          this.active ? this.showTech.display = "inline" : this.showTech.display = "none"
        }
      }
    }
</script>


<style scoped>
  h2{
    font-family: 'Ubuntu', sans-serif;
    display: inline-block;
    color: #327F32;
    font-size: 3vw
  }
  div{
    font-family: 'Roboto', sans-serif;
  }
  .techUsedBar{
    margin: auto;
    width: 57vw;
    border: 1px solid #587F58;
    text-align: left;
    border-radius: 1vw;
    padding: 0.5vw;
    padding-left: 2vw;
    font-size: 1.4vw;
    color: #587F58;
  }
  .techUsedBar i{
    margin-left: 43vw;
  }
  #barTitle{
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
  }
  .techUsedBar:hover{
    cursor: pointer;
    color: #55D955;
    border-color: #55D955;
  }
  .expandTech div{
    margin-top: 1.2vw;
  }
  .logo{
    height: 3vh;
  }

  

</style>
<!--  height of bar when expanded height: 11vw; expandtech height: 10vw -->