<template>
  <div class="faq">
    <div class="centerplease">FAQ</div>
    <br>

    <div class="content">
      <div>
        <input type="checkbox" id="question1" name="q" class="questions">
        <div class="plus">+</div>
        <label for="question1" class="question">Who is a 'Junior Developer'?</label>
        <div class="answers">We define a Junior Developer as someone who has beginner development skills, and is new (or brand-new) to actually working as a professional developer. Since the spectrum is pretty large, we encourage employers to be specific about their requirements and expectations of potential hires.</div>
      </div>

      <div>
        <input type="checkbox" id="question2" name="q" class="questions">
        <div class="plus">+</div>
        <label for="question2" class="question">How long after graduation you can find a job?</label>
        <div class="answers">It completely depends on different things. From your skills to your luck!</div>
      </div>

      <div>
        <input type="checkbox" id="question3" name="q" class="questions">
        <div class="plus">+</div>
        <label
          for="question3"
          class="question"
        >How we can keep ourselves update?</label>
        <div class="answers">Participating in meetups, following news in tech world via social medias like twitter... </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 80%;
  padding: 0;
  margin: 0 auto;
}

.centerplease {
  margin: 0 auto;
  max-width: 270px;
  font-size: 40px;
  color: #f3758c;
}

/*Question*/
.question {
  position: relative;
  background: #f9f9f9;
  margin: 0;
  padding: 10px 10px 10px 50px;
  display: block;
  width:100%;
  cursor: pointer;
}
/*Answer*/
.answers {
  padding: 0px 15px;
  margin: 5px 0;
  width:100%!important;
  height: 0;
  overflow: hidden;
  z-index: -1;
  position: relative;
  opacity: 0;
  -webkit-transition: .3s ease;
  -moz-transition: .3s ease;
  -o-transition: .3s ease;
  transition: .3s ease;
}

.questions:checked ~ .answers{
  height: auto;
  opacity: 1;
  padding: 15px;
  
}

/*FAQ Toggle*/
.plus {
  position: absolute;
  margin-left: 10px;
  z-index: 5;
  font-size: 2em;
  line-height: 100%;
  -webkit-user-select: none;    
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-transition: .3s ease;
  -moz-transition: .3s ease;
  -o-transition: .3s ease;
  transition: .3s ease;

}

.questions:checked ~ .plus {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);

}

.questions {
  display: none;
  
}
</style>
