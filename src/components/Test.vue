<template>
    <v-stepper v-model="questionsStep">
        <v-stepper-header>
            <v-stepper-step v-for="(item, key) in questions" :step="key + 1" :complete="questionsStep > key + 1"
                            :key="item.question.id"/>
            <v-divider/>
            <v-stepper-step :step="questions.length + 1" :complete="questionsStep > questions.length"/>
        </v-stepper-header>
        <v-stepper-items>
            <v-stepper-content :step="key + 1" v-for="(item, key) in questions" :key="item.question.id">
                <v-card color="lighten-1" class="mb-5">
                    <div class="answers js__answers">
                        <p>{{ item.question.text }}</p>
                        <v-checkbox v-for="(answer) in item.question.answers" :key="answer.id"
                                    :label="answer.text"
                                    v-model="answers"
                                    :value="answer.id"
                        />
                        <span>Отмеченные имена: {{ answers }}</span>
                    </div>
                </v-card>
                <v-btn color="info" v-if="answers.length > 0" @click.native="questionsStep = key + 2"
                       v-on:click="send(item, answers)">Apply</v-btn>
                <v-btn color="info" v-else disabled="">Apply</v-btn>
                <v-btn color="error" v-on:click="pause()">Pause</v-btn>
            </v-stepper-content>
            <v-stepper-content :step="questions.length + 1">
                <v-card color="lighten-1" class="mb-5">
                    ok
                </v-card>
                <v-btn color="info" v-if="answers.length > 0" @click.native="questionsStep = key + 2"
                       v-on:click="send(item, answers)">Apply</v-btn>
                <v-btn color="info" v-else disabled="">Apply</v-btn>
                <v-btn color="error" v-on:click="pause()">Pause</v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
import Timer from './Timer'

export default {
  name: 'Test',
  components: {'test-timer': Timer},
  data: () => ({
    questionsStep: 0,
    answerSelector: '.js__answers',
    answers: [],
    direction: {},
    difficulty: {},
    questions: [
      {
        id: 1,
        question: {
          id: 1,
          text: 'Test question 1',
          points: 10,
          answers: [
            {id: 1, text: 'true'},
            {id: 2, text: 'false'},
            {id: 3, text: 'false'},
            {id: 4, text: 'false'}
          ]
        }
      },
      {
        id: 2,
        question: {
          id: 2,
          text: 'Test question 2',
          points: 10,
          answers: [
            {id: 5, text: 'true'},
            {id: 6, text: 'false'},
            {id: 7, text: 'false'},
            {id: 8, text: 'false'}
          ]
        }
      },
      {
        id: 3,
        question: {
          id: 3,
          text: 'Test question 3',
          points: 10,
          answers: [
            {id: 9, text: 'true'},
            {id: 10, text: 'false'},
            {id: 11, text: 'false'},
            {id: 12, text: 'false'}
          ]
        }
      },
      {
        id: 4,
        question: {
          id: 4,
          text: 'Test question 4',
          points: 10,
          answers: [
            {id: 13, text: 'true'},
            {id: 14, text: 'false'},
            {id: 15, text: 'false'},
            {id: 16, text: 'false'}
          ]
        }
      },
      {
        id: 5,
        question: {
          id: 5,
          text: 'Test question 5',
          points: 10,
          answers: [
            {id: 17, text: 'true'},
            {id: 18, text: 'false'},
            {id: 19, text: 'false'},
            {id: 20, text: 'false'}
          ]
        }
      }
    ]
  }),
  methods: {
    send: function (question, answers) {
      console.log("send users' answers")
      console.log(answers)
      if (question === this.questions[this.questions.length - 1]) {
        console.log('last question')
      }
      this.answers = []
    },
    pause: function () {
      console.log('pause')
    }
  },
  beforeCreate () {
    console.log('getting data from api')
  }
}
</script>

<style scoped>
    .answers {
        padding: 2%;
    }
</style>
