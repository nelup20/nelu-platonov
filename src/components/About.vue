<template>
  <div class="divaboutComponent">
      <h2>ABOUT ME</h2>
      <div class="container">
        <div class="aboutText">My name is Nelu Ion Platonov. I'm a 22 year old self-taught web developer from Moldova who moved to Belgium in 2011. 
          I enjoy learning a lot, especially about finance & technology, as well as my fair share of biology and cosmology. Currently I'm studying in my 2nd year
          for a BSc of Business Administration at the KU Leuven. <br><br> My hobbies include: reading, playing the guitar (7 years), weight lifting, chess, programming 
          and investing. My native languages are English and Romanian. I'm also fluent in Russian and Dutch. My French is at an indermediate level but I will strive to improve it. I'm also currently
          learning Japanese.
          <br>
          <br>
          <br>
          <span class="middleAboutText">
          I love solving tough problems and my stubborn personality helps a lot, because I won't quit until I solve the problem at hand. Lastly I want to mention that I aim to become a great Software Engineer and also attempt
          to become proficient in Machine Learning. As such I'm planning to apply to Georgia Institute of Technology's Online Master of Science in Computer Science after my current undergraduate degree. 
          </span>
        </div>
        <img src="../assets/me3.jpg" alt="">    
      </div>
  </div>
</template>
<script>
    
</script>
<style scoped>
  h2{
    font-family: 'Ubuntu', sans-serif;
    color: #327F32;
    display: inline-block
  }
  .container{
    align-items: center;
    flex-direction: row;
  }
  img{
    display: inline;
    position: relative;
    width: 20vw;
    margin-left: 40vw;
    box-shadow: 1px 2px 8px black;
  }
  .secondImg{
    display: block;
    position: absolute;
    margin-left: 20vw;
    margin-top: 2vh;
  }
  .aboutText{
    display: inline;
    position: absolute;
    width: 38vw;
  }
  .aboutText2{
    width: 38vw;
    margin-left: 41vw;
    text-align: left;
  }
  div{
     font-family: 'Roboto', sans-serif;
  }
  @media(max-width: 470px){
    .aboutText{
    display: inline;
    position: absolute;
    margin-left: -23vw;
    width: 62vw;
  }
  img{
    width: 35vw;
    margin-right: -21vw;
  }
  .secondImg{
    margin-left: 63vw;
  }
  .divaboutComponent{
    height: 100vh;
  }
  .aboutText2{
    display: initial;
    position: absolute;
    margin: 0;
    margin-top: 160vh;
    margin-left: -76vw;
    width: 98vw;
  }
  .middleAboutText{
      display: inline-block;
      width: 100vw;
    }
  }
  @media(min-width: 360px) and (max-width: 361px){
    .aboutText2{
        margin-top: 180vw;
      }
      .divaboutComponent{
    height: 280vw;
  }
  }
    @media(min-width: 412px) and (max-width: 414px){
      .aboutText2{
        margin-top: 160vw;
      }
      .divaboutComponent{
    height: 235vw;
  }
    }
  @media(min-width: 480px) and (max-width: 640px){
    .aboutText{
    display: inline;
    position: absolute;
    margin-left: -23vw;
    width: 62vw;
  }
  img{
    width: 35vw;
    margin-right: -21vw;
  }
  .secondImg{
    margin-left: 63vw;
  }
  .divaboutComponent{
    height: 115vh;
  }
  .aboutText2{
    display: initial;
    position: absolute;
    margin: 0;
    margin-top: 80vh;
    margin-left: -76vw;
    width: 98vw;
  }
  }
  @media(min-width: 640px) and (max-width: 767px){
    img{
    width: 40vw;
    margin-right: -21vw;
  }
  }
  @media(min-width: 768px) and (max-width: 900px){
    .aboutText{
    display: inline;
    position: absolute;
    margin-left: -23vw;
    width: 62vw;
  }
  img{
    width: 35vw;
    margin-right: -21vw;
  }
  .secondImg{
    margin-left: 63vw;
  }
  .divaboutComponent{
    height: 70vh;
  }
  .aboutText2{
    display: initial;
    position: absolute;
    margin: 0;
    margin-top: 60vh;
    margin-left: -76vw;
    width: 60vw;
  }
  }
  @media(min-width: 901px) and (max-width: 1024px){
  img{
    width: 28vw
  }
  .secondImg{
   margin-top: 13vw;
   width: 30vw
  }
  .divaboutComponent{
    height: 80vh;
  }
  .aboutText2{
    margin-top: 11vw;
    margin-left: 55vw;
  }
  }
  @media(min-width: 1280px) and (max-width: 1300px){
  
  .secondImg{
   margin-top: 13vh;
  }
  .divaboutComponent{
    height: 60vh;
  }
  .aboutText2{
    margin-top: 10vh;
    font-size: 
  }
  }
  @media(min-width: 1366px) and (max-width: 1400px){
  
  .secondImg{
   margin-top: 10vh;
  }
  .divaboutComponent{
    height: 120vh;
  }
  .aboutText2{
    margin-top: 7.3vh;
  }
  }
  @media(min-width: 1650px) and (max-width: 1700px){
  .divaboutComponent{
    height: 120vh;
  }
  }
  @media(min-width: 1280px){
    .divaboutComponent{
      width: 100vw;
      height: 60vh;
    }
  }
</style>
