<template>
  <div>
      <h2>ABOUT ME</h2>
      <div class="container">
        <div class="aboutText">My name is Nelu Ion Platonov. I'm a 20 year old self-taught web developer from Moldova who moved to Belgium in 2011. 
          I enjoy learning a lot, especially about finance & technology, as well as my fair share of biology and cosmology. Currently I am studying in my 1st year
          for a bachelor of Business Administration at the KU Leuven university. My hobbies include: reading, playing the guitar (5 years), bodybuilding (3 years), chess, programming 
          and cryptocurrency trading. My native languages are English and Romanian, I also know Russian at a good level (learnt it in middle school) and Dutch at a very good level
          (finished high school in West Flanders).
          <br>
          <br>
          <br>
          I love solving tough problems and my stubborn personality helps that a lot, I won't quit until I solve the problem.
          I have a lot of big dreams and hopes, which I'll keep working towards. I aim to become the best in web development 
          and in life in general.
          <br>
          <br>
          <br>
          Meeting new people is a lot of fun, I feel that I can easily get along with a lot of people. At the very least I can make sure
          cooperation is at it's best.
        </div>
        <img src="../../assets/me.png" alt="">
        <img src="../../assets/me2.png" class="secondImg" alt="">
        <div class="aboutText2"><br>
          One of my biggest dreams that I've had since I was 10 years old is to move to or at least visit the United States. I feel like I would be at home there. I have a strong sense of patriotism when it comes to the US,
          which I don't feel as strongly for my native country. 
          <br>
          <br>
          <br>
          Hope you enjoyed looking at my site, thanks for stopping by ! <i class="fa fa-smile-o" aria-hidden="true"></i>

        </div>
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
</style>
