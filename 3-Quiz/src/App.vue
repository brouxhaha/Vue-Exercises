<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="flip" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" mode="out-in">
                    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
                </transition>
        
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';

    export default {
        data() {
            return {
                mode: 'app-question',
                scaling: 0.05,
                scaled: 0
            }
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
              } else {
                  this.mode = 'app-question';
                  alert('Wrong, try again!');
              }
          },
          beforeEnter(el) {
              this.scaled = 0;
              el.style.transform = `scaleX(${this.scaled})`;
          },

          enter(el, done) {
              let scaled = 0;
              const interval = setInterval(() => {
                  this.scaled = this.scaled + this.scaling;
                  el.style.transform = `scaleX(${scaled})`;

                  if(this.scaled == 1) {
                      clearInterval(interval);
                      done();
                  }
              }, 20);
          },

          afterEnter(el) {

          },

          beforeLeave(el) {
              this.scaled = 1;
              el.style.transform = `scaleX(${this.scaled})`;
          },

          leave(el, done) {
              let scaled = 1;
              const interval = setInterval(() => {
                  this.scaled = this.scaled - this.scaling;
                  el.style.transform = `scaleX(${this.scaled})`;

                  if(this.scaled == 0) {
                      clearInterval(interval);
                      done();
                  }
              }, 20);
          },

          afterLeave(el) {

          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }
</script>

