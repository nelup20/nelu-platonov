<template>
  <div class="skillsComponent">
    <div class="topPart">
      <h1>SKILLS</h1>
      <div class="legend">
        <h4>Legend</h4>
        <div class="container">
          <div id="greenSkill"></div>
          <div>Very comfortable using it and good knowledge</div>
        </div>
        <div class="container">
          <div id="yellowSkill"></div>
          <div>Decentely comfortable and decent knowledge</div>
        </div>
        <div>
        <div class="container">
          <div id="redSkill"></div>
          <div>Not comfortable yet but still learning</div>
        </div>
        </div>
        </div>
        </div>
      <div class="skillGroup">
      <div class="skill green">HTML5</div>
      <div class="skill green">CSS3</div>
      <div class="skill green">Javascript (ES6)</div>
      <div class="skill green">Bootstrap</div>
      <div class="skill green">jQuery</div>
      <div class="skill green">Vue.js</div>
      </div>
      <div class="skillGroup">
      <div class="skill yellow">Node.js</div>
      <div class="skill green">Express</div>
      <div class="skill yellow">MongoDB</div>
      <div class="skill red">PHP</div>
      <div class="skill red">Laravel</div>
      <div class="skill red">MySQL</div>
      </div>
      <div class="skillGroup">
      <div class="skill green">NPM</div>
      <div class="skill yellow">Git</div>
      <div class="skill red">Sass</div>
      <div class="skill red">Webpack</div>
      <div class="skill red">Apache</div>
      <div class="skill red">Nginx</div>
      </div>
      <div class="skillGroup">
      <div class="skill red">Babel</div>
      <div class="skill red">Wordpress</div>
      <div class="skill red">Drupal</div>
      <div class="skill red">Semantic</div>
      <div class="skill red">Linux</div>
      <div class="skill red">React</div>
      </div>
      <div class="skillGroup">
      <div class="skill red">AWS</div>
      <div class="skill red">Azure</div>
      <div class="skill red">Digital Ocean</div>
      <div class="skill red">Scaleway</div>
      <div class="skill red">Heroku</div>
      <div class="skill red">Firebase</div>
      </div>
      <h1>LANGUAGES</h1>
      <div class="skillGroup languages">
      <div class="skill green">English</div>
      <div class="skill green">Romanian</div>
      <div class="skill green">Dutch</div>
      <div class="skill yellow">Russian</div>
      <div class="skill red">French</div>
      <div class="skill red">German</div>
      <div class="skill red">Spanish</div>
      <div class="skill red">Mandarin</div>
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
    border: 1px solid #327F32;;
    padding: 1.5vh;
    width: 5vw;
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
  @media(max-width: 320px){
    .skillsComponent{
      height: 260vh;
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
</style>
