<template>
  <div :style="PortfolioComponent" class="DivEntirePortfolioComponent">
    <h2>PORTFOLIO</h2>
        <div class="portfolioNav">
          <i class="fa fa-chevron-left" aria-hidden="true" id="leftArrow" @click="PortfolioSite(-1)"></i>
        <div>
          <a><img :src="`./static/${previousSite.img}.png`" class="otherSites" alt="" @click="PortfolioSite(-1)"></a>
        </div>
        <div>
          <a :href="currentSite.link" target="_blank"><img :src="`./static/${currentSite.img}.png`" class="siteLogo" alt=""></a>
        </div>
        <div>
          <a><img :src="`./static/${nextSite.img}.png`" class="otherSites" alt="" @click="PortfolioSite(1)" ></a>
        </div>
        <i class="fa fa-chevron-right" aria-hidden="true" @click="PortfolioSite(1)"></i>
      </div>
      <div>
        <div class="techUsedBar" :style="expandBar"  @click="activate">
        <span id="barTitle">Technologies Used</span>
        <i class="fa fa-plus-circle" aria-hidden="true" :class="{ 'fa fa-minus-circle' : active }"></i>
       <div class="expandTech" :style="showTech">
          <div>Front-end: <img v-for="(tech, index) in frontEnd" :key="index" :src="`./static/${tech}.png`" class="logo" alt=""> </div>
           <div>Back-end: <img v-for="(tech, index) in backEnd" :key="index" :src="`./static/${tech}.png`" class="logo" alt=""> </div>
           <div>Development: <img v-for="(tech, index) in development" :key="index" :src="`./static/${tech}.png`" class="logo" alt=""> </div>
       </div>
        </div>
      </div>
      <h2>FREELANCE JOBS</h2>
      <div class="portfolioNav">
          <i class="fa fa-chevron-left" aria-hidden="true" id="leftArrow" @click="PortfolioSiteFreeLance(-1)"></i>
        <div>
          <a><img :src="`./static/${previousSiteFreelance.img}.png`" class="otherSites" alt="" @click="PortfolioSiteFreeLance(-1)"></a>
        </div>
        <div>
          <a :href="currentSiteFreelance.link" target="_blank"><img :src="`./static/${currentSiteFreelance.img}.png`" class="siteLogo" alt=""></a>
        </div>
        <div>
          <a><img :src="`./static/${nextSiteFreelance.img}.png`" class="otherSites" alt="" @click="PortfolioSiteFreeLance(1)" ></a>
        </div>
        <i class="fa fa-chevron-right" aria-hidden="true" @click="PortfolioSiteFreeLance(1)"></i>
      </div>
      <div>
        <div class="techUsedBar" :style="expandBarFreelance"  @click="activateFreelance">
        <span id="barTitle">Technologies Used</span>
        <i class="fa fa-plus-circle" aria-hidden="true" :class="{ 'fa fa-minus-circle' : activeFreelance }"></i>
       <div class="expandTech" :style="showTechFreelance">
          <div>Front-end: <img v-for="(tech, index) in frontEndFreelance" :key="index" :src="`./static/${tech}.png`" class="logo" alt=""> </div>
           <div>Back-end: <img v-for="(tech, index) in backEndFreelance" :key="index" :src="`./static/${tech}.png`" class="logo" alt=""> </div>
           <div>Development: <img v-for="(tech, index) in developmentFreelance" :key="index" :src="`./static/${tech}.png`" class="logo" alt=""> </div>
       </div>
        </div>
      </div>
  </div>
</template>


<script>
    export default {
      data(){
        return {
          active: false,    //This is used for toggling the tech stack bar/portion
          activeFreelance: false,
          expandBar: {                //All of these are used for styling, most importantly for the transitions.
            height: "1.6vw",
            transition: "height 0.3s"
          },
          expandBarFreelance: {
            height: "1.6vw",
            transition: "height 0.3s"
          },
          showTech: {
            display: "none",
            transition: 'display 0.2s',
            WebkitTransition: "display 0.2s"
          },
          showTechFreelance: {
            display: "none",
            transition: 'display 0.2s',
            WebkitTransition: "display 0.2s"
          },
          highlightedSiteIndex: 0,          // These "Indexes" simply indicate which site is the currently highlighted one, basically which one to display
          highlightedSiteIndexFreelance: 0, // the used tech stack for. We use this index (obviously add or substract 1 when navigating) to get data from the array in the store.
          frontEnd: '',                     // Then we simply store the sub-arrays that we get from the highlighted site and store them in: frontEnd, backEnd etc.
          backEnd: '',
          development: '',
          currentSite: '',
          previousSite: '',
          nextSite: '',
          frontEndFreelance: '',
          backEndFreelance: '',
          developmentFreelance: '',
          currentSiteFreelance: '',
          previousSiteFreelance: '',
          nextSiteFreelance: '',
          PortfolioComponent: {       // To make sure there's enough space when opening both the portfolio and the freelancer tech stacks.
            height: "120vh"
          },

        }
      },
      methods: {
        activate(){       // This is just to toggle the bar, we increase the height and display of the tech stack which means we can use transition ! 
          this.active = !this.active;
          this.active ? this.expandBar.height = "24vh" : this.expandBar.height = "1.6vw";
          this.active ? this.showTech.display = "inline" : this.showTech.display = "none";
        },
        activateFreelance(){
          this.activeFreelance = !this.activeFreelance;
          this.activeFreelance ? this.expandBarFreelance.height = "24vh" : this.expandBarFreelance.height = "1.6vw";
          this.activeFreelance ? this.showTechFreelance.display = "inline" : this.showTechFreelance.display = "none";
        },
        PortfolioSite(amount){          // This is to navigate through our sites, we store only 3 sites at one point: previous, current(also highlighted) and next site. We simply add/substract 1 for the index
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
        },
        PortfolioSiteFreeLance(amount){
          if(amount === -1 && this.highlightedSiteIndexFreelance === 0){
            this.highlightedSiteIndexFreelance = 4
          } else if(amount === 1 && this.highlightedSiteIndexFreelance === 4){
            this.highlightedSiteIndexFreelance = 0
          } else {
            this.highlightedSiteIndexFreelance += amount;
          };
          this.frontEndFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance].frontEnd;
          this.backEndFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance].backEnd;
          this.developmentFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance].development;
          this.currentSiteFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance];
          if(this.highlightedSiteIndexFreelance === 4){
            this.nextSiteFreelance = this.$store.state.sitesFreelance[0]
          } else {
            this.nextSiteFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance + 1];
          }
          if(this.highlightedSiteIndexFreelance === 0){
            this.previousSiteFreelance = this.$store.state.sitesFreelance[4];
          } else {
          this.previousSiteFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance - 1];
          };
        },
      },
      created(){      // This is just so we get our initial sites and tech stacks, always the same.
          this.frontEnd = this.$store.state.sites[this.highlightedSiteIndex].frontEnd;
          this.backEnd = this.$store.state.sites[this.highlightedSiteIndex].backEnd;
          this.development = this.$store.state.sites[this.highlightedSiteIndex].development;
          this.currentSite = this.$store.state.sites[this.highlightedSiteIndex];
          this.nextSite = this.$store.state.sites[this.highlightedSiteIndex + 1];
          this.previousSite = this.$store.state.sites[17];
          this.frontEndFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance].frontEnd;
          this.backEndFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance].backEnd;
          this.developmentFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance].development;
          this.currentSiteFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance];
          this.nextSiteFreelance = this.$store.state.sitesFreelance[this.highlightedSiteIndexFreelance + 1];
          this.previousSiteFreelance = this.$store.state.sitesFreelance[4];
      },
    }
</script>


<style scoped>
  h2{
    font-family: 'Ubuntu', sans-serif;
    display: inline-block;
    color: #327F32;
    font-size: 2.2vw
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
    -webkit-transition: all 0.5s;
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
    box-shadow: 1px 1px 7px black;
    cursor: pointer;
  }
  #leftArrow{
    margin-top: 6.5vh;
    margin-left: 5vw;
    margin-right: -5vw;
  }
  @media(max-width: 1024px){
    h2{
      font-size: 5vw;
    }
    .otherSites{
      display: none;
    }
    .siteLogo{
      width: 30vw;
    }
    .portfolioNav i{
    margin-top: 9vw;
    margin-left: -7vw;
    margin-right: 7vw;
    font-size: 8vw;
    color: darkorange;
  }
  .logo{
    height: 6.3vw;
    margin-left: 0.3vw;
  }
  .techUsedBar{
    
    padding: 1.5vw;
    padding-left: 1.8vw;
    padding-bottom: 3vw;
    font-size: 2.6vw;
  }
  .techUsedBar i{
    margin-left: 24vw;
  }
  }
@media (min-width: 1366px) and (max-width: 1400px){
  h2{
      font-size: 3vh;
    }
    .logo{
    height: 3.5vh;
    margin-left: 0.3vh;
  }
}
@media (min-width: 1650px) and (max-width: 1700px){
  h2{
      font-size: 3.3vh;
    }
    .logo{
    height: 3.8vh;
    margin-left: 0.3vh;
  }
}
@media (min-width: 1280px){
  .DivEntirePortfolioComponent{
    width: 100vw;
  }
}
@media(min-width: 1920px){
    h2{
      font-size: 2.2vw;
    }
    
    .siteLogo{
      width: 10.5vw;
    }
    .portfolioNav i{
    margin-top: 3vw;
    margin-left: -7vw;
    margin-right: 7vw;
    font-size: 3vw;
    color: darkorange;
  }
  .logo{
    height: 2vw;
    margin-left: 0.3vw;
  }
  .techUsedBar{
    
    padding: 0.2vw;
    padding-left: 1vw;
    font-size: 1.2vw;
  }

}
</style>
<!--  height of bar when expanded height: 11vw; expandtech height: 10vw -->