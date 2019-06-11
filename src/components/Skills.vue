<template>
  <div class="skillsComponent">
    <div class="topPart">
      <h1>Proficient</h1>
        </div>
      <div class="skillGroup">
      <div class="skill">HTML5</div>
      <div class="skill">CSS3</div>
      <div class="skill">Javascript (ES6)</div>
      <div class="skill">Bootstrap</div>
      <div class="skill">jQuery</div>
      <div class="skill">Vue.js</div>
      </div>
      <div class="skillGroup">
      <div class="skill">Node.js</div>
      <div class="skill">Express</div>
      <div class="skill">MongoDB</div>
      <div class="skill">NPM</div>
      <div class="skill">Git</div>
      <div class="skill">Heroku</div>
      </div>
      <h1>Familiar</h1>
      <div class="skillGroup">
      <div class="skill">React</div>
      <div class="skill">Sass</div>
      <div class="skill">Python</div>
      <div class="skill">SQL</div>
      <div class="skill">PHP</div>
      <div class="skill">Wordpress</div>
      </div>
      <div class="skillGroup">
      <div class="skill">Jest</div>
      <div class="skill">Puppeteer</div>
      <div class="skill">AWS</div>
      <div class="skill">DigitalOcean</div>
      <div class="skill">Redis</div>
      <div class="skill">Linux</div>
      </div>
      <h1>Languages (fluent)</h1>
      <div class="skillGroup languages">
      <div class="skill">English (native)</div>
      <div class="skill">Romanian (native)</div>
      <div class="skill">Dutch</div>
      <div class="skill">Russian</div>
      </div>
  </div>
</template>
<script>
    
</script>
<style scoped>
 h1{
    display: inline-block;
    font-family: 'Ubuntu', sans-serif;
    color: #327F32;
    margin-right: 0;
    margin-top: 3vh;
  }
  .skillGroup{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skill{
    font-family: 'Roboto', sans-serif;
    margin: 2vw;
    margin-left: 4vw;
    margin-right: 4vw;
    border: 2px solid #327F32;;
    padding: 1.5vh;
    width: 5vw;
    font-weight: 600;
  }
  .legend{
    font-family: 'Roboto', sans-serif;
    display: flex;
    border: 1px solid #327F32;;
    width: 30vw;
    margin: 0;
    margin-left: 70vw;
    margin-top: -4.5vw;
    flex-direction: column;
  }
  .container{
    flex: 1;
    display: flex;
  }
  .container div{
    flex: 2;
    justify-content: center;
    align-self: center;
    align-items: center;
  }
  #greenSkill{
    height: 1vh;
    background-color: rgb(100, 255, 100);
    flex: 0.05;
    border-radius: 50%;
    margin-right: 1.3vw;
    margin-left: 1vw;
  }
  #yellowSkill{
   height: 1vh;
    background-color: yellow;
    flex: 0.05;
    border-radius: 50%;
    margin-right: 1.3vw;
    margin-left: 1vw; 
  }
  #redSkill{
    height: 1vh;
    background-color: red;
    flex: 0.05;
    border-radius: 50%;
    margin-right: 1.3vw;
    margin-left: 1vw;
  }
  .green{
    background-color: rgba(100, 255, 100, 1)
  }
  .yellow{
    background-color: yellow;
  }
  .red{
    background-color: red;
  }
  .languages div{
    margin: 1.85vw
  }
  .skillsComponent{
    height: 110vh;
  }
  @media(max-width: 460px){
    .skillsComponent{
      height: 400vw;
    }
    .skillGroup{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .skill{
    flex-basis: 30vw;
  }
 .legend{
    font-family: 'Roboto', sans-serif;
    display: flex;
    border: 1px solid #327F32;;
    width: 100vw;
    margin: 0;
    margin-left: 0vw;
    margin-top: -4.5vw;
    flex-direction: column;
  }
  }
  @media(min-width: 470px) and (max-width: 700px){
    .skillsComponent{
      height: 190vh;
    }
    .skillGroup{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .skill{
    flex-basis: 30vw;
  }
 .legend{
    font-family: 'Roboto', sans-serif;
    display: flex;
    border: 1px solid #327F32;;
    width: 100vw;
    margin: 0;
    margin-left: 0vw;
    margin-top: -4.5vw;
    flex-direction: column;
  }
  }
  @media(min-width: 640px) and (max-width: 700px){
    .skillsComponent{
      height: 205vh;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1024px){
    .skillsComponent{
      height: 160vh;
    }
    .legend{
    font-family: 'Roboto', sans-serif;
    display: flex;
    border: 1px solid #327F32;;
    width: 50vw;
    margin: 0;
    margin-left: 50vw;
    margin-top: -1.5vw;
    flex-direction: column;
  }
  .skillGroup{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .skill{
    flex-basis: 20vw;
  }
  }
  @media (min-width: 1024px) and (max-width: 1300px){
    .skillsComponent{
      height: 180vw;
    }
  }
  @media (min-width: 1280px) and (max-height: 800px){
    .skillsComponent{
      height: 120vh;
    }
    .skill{
    flex-basis: 8vw;
  }
  }
  @media (min-width: 1280px) {
    .skillsComponent{
      width: 100vw; 
    }
  }
</style>
