<template>
  <div class="faq">
    <div class="centerplease">FAQ accordion</div>
    <br>

    <div class="content">
      <div>
        <input type="checkbox" id="question1" name="q" class="questions">
        <div class="plus">+</div>
        <label for="question1" class="question">This is the question that will be asked?</label>
        <div class="answers">This is the answer of the question.. keep it short.</div>
      </div>

      <div>
        <input type="checkbox" id="question2" name="q" class="questions">
        <div class="plus">+</div>
        <label for="question2" class="question">Short?</label>
        <div class="answers">short!</div>
      </div>

      <div>
        <input type="checkbox" id="question3" name="q" class="questions">
        <div class="plus">+</div>
        <label
          for="question3"
          class="question"
        >Keep answers short. But in case of...If the question is long, the text wraps.</label>
        <div class="answers">This is the answer!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

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
