<template>
  <div >
    <h2>PORTFOLIO</h2>
        <div class="portfolioNav">
          <i class="fa fa-chevron-left" aria-hidden="true" id="leftArrow" @click="PortfolioSite(-1)"></i>
        <div>
          <a><img :src="`./src/assets/${previousSite.img}.png`" class="siteLogo otherSites" alt="" @click="PortfolioSite(-1)"></a>
        </div>
        <div>
          <a :href="currentSite.link" target="_blank"><img :src="`./src/assets/${currentSite.img}.png`" class="siteLogo" alt=""></a>
        </div>
        <div>
          <a><img :src="`./src/assets/${nextSite.img}.png`" class="siteLogo otherSites" alt="" @click="PortfolioSite(1)" ></a>
        </div>
        <i class="fa fa-chevron-right" aria-hidden="true" @click="PortfolioSite(1)"></i>
      </div>
      <div>
        <div class="techUsedBar" :style="expandBar"  @click="activate">
        <span id="barTitle">Technologies Used</span>
        <i class="fa fa-plus-circle" aria-hidden="true" :class="{ 'fa fa-minus-circle' : active }"></i>
       <div class="expandTech" :style="showTech">
          <div>Front-end: <img v-for="(tech, index) in frontEnd" :key="index" :src="`./src/assets/${tech}.png`" class="logo" alt=""> </div>
           <div>Back-end: <img v-for="(tech, index) in backEnd" :key="index" :src="`./src/assets/${tech}.png`" class="logo" alt=""> </div>
           <div>Development: <img v-for="(tech, index) in development" :key="index" :src="`./src/assets/${tech}.png`" class="logo" alt=""> </div>
       </div>
        </div>
      </div>
      <h2>FREELANCE JOBS</h2>
      <div class="portfolioNav">
          <i class="fa fa-chevron-left" aria-hidden="true" id="leftArrow" @click="PortfolioSite(-1)"></i>
        <div>
          <a><img :src="`./src/assets/${previousSite.img}.png`" class="siteLogo otherSites" alt="" @click="PortfolioSite(-1)"></a>
        </div>
        <div>
          <a :href="currentSite.link" target="_blank"><img :src="`./src/assets/${currentSite.img}.png`" class="siteLogo" alt=""></a>
        </div>
        <div>
          <a><img :src="`./src/assets/${nextSite.img}.png`" class="siteLogo otherSites" alt="" @click="PortfolioSite(1)" ></a>
        </div>
        <i class="fa fa-chevron-right" aria-hidden="true" @click="PortfolioSite(1)"></i>
      </div>
      <div>
        <div class="techUsedBar" :style="expandBar"  @click="activate">
        <span id="barTitle">Technologies Used</span>
        <i class="fa fa-plus-circle" aria-hidden="true" :class="{ 'fa fa-minus-circle' : active }"></i>
       <div class="expandTech" :style="showTech">
          <div>Front-end: <img v-for="(tech, index) in frontEnd" :key="index" :src="`./src/assets/${tech}.png`" class="logo" alt=""> </div>
           <div>Back-end: <img v-for="(tech, index) in backEnd" :key="index" :src="`./src/assets/${tech}.png`" class="logo" alt=""> </div>
           <div>Development: <img v-for="(tech, index) in development" :key="index" :src="`./src/assets/${tech}.png`" class="logo" alt=""> </div>
       </div>
        </div>
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
          highlightedSiteIndex: 0,
          frontEnd: '',
          backEnd: '',
          development: '',
          currentSite: '',
          previousSite: '',
          nextSite: ''

        }
      },
      methods: {
        activate(){
          this.active = !this.active;
          this.active ? this.expandBar.height = "13vw" : this.expandBar.height = "1.6vw";
          this.active ? this.showTech.display = "inline" : this.showTech.display = "none";
        },
        PortfolioSite(amount){
          if(amount === -1 && this.highlightedSiteIndex === 0){
            this.highlightedSiteIndex = 16
          } else if(amount === 1 && this.highlightedSiteIndex === 16){
            this.highlightedSiteIndex = 0
          } else {
            this.highlightedSiteIndex += amount;
          };
          this.frontEnd = this.$store.state.sites[this.highlightedSiteIndex].frontEnd;
          this.backEnd = this.$store.state.sites[this.highlightedSiteIndex].backEnd;
          this.development = this.$store.state.sites[this.highlightedSiteIndex].development;
          this.currentSite = this.$store.state.sites[this.highlightedSiteIndex];
          if(this.highlightedSiteIndex === 16){
            this.nextSite = this.$store.state.sites[0]
          } else {
            this.nextSite = this.$store.state.sites[this.highlightedSiteIndex + 1];
          }
          if(this.highlightedSiteIndex === 0){
            this.previousSite = this.$store.state.sites[16];
          } else {
          this.previousSite = this.$store.state.sites[this.highlightedSiteIndex - 1];
          }
        }
      },
      created(){
          this.frontEnd = this.$store.state.sites[this.highlightedSiteIndex].frontEnd;
          this.backEnd = this.$store.state.sites[this.highlightedSiteIndex].backEnd;
          this.development = this.$store.state.sites[this.highlightedSiteIndex].development;
          this.currentSite = this.$store.state.sites[this.highlightedSiteIndex];
          this.nextSite = this.$store.state.sites[this.highlightedSiteIndex + 1];
          if(this.highlightedSiteIndex === 0){
            this.previousSite = this.$store.state.sites[17];
          } else {
          this.previousSite = this.$store.state.sites[this.highlightedSiteIndex - 1];
          }
      },
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
    height: 4.3vh;
    margin-left: 1vw;
  }
  .portfolioNav{
    display: flex;
  }
  .portfolioNav div{
    flex: 1;
  }
  .siteLogo{
    height: 18vh;
    width: 11vw ;
    border-radius: 0%;
    box-shadow: 1px 1px 7px black;
    margin-bottom: 3vh;
    transition: all 0.5s;
  }
  .siteLogo:hover{
    border-radius: 50%;
  }
  .portfolioNav i{
    margin-top: 6.5vh;
    margin-left: -5vw;
    margin-right: 5vw;
    font-size: 3vw;
    color: darkorange;
  }
  .portfolioNav i:hover{
    cursor: pointer;
  }
  .otherSites{
    height: 9vh;
    width: 5.5vw;
    margin-top: 4vh;
    cursor: pointer;
  }
  #leftArrow{
    margin-top: 6.5vh;
    margin-left: 5vw;
    margin-right: -5vw;
  }


</style>
<!--  height of bar when expanded height: 11vw; expandtech height: 10vw -->