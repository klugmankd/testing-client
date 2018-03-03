<template>
    <v-stepper v-model="questionsStep">
        <v-stepper-header>
            <v-stepper-step :key="item.fakeId" v-for="(item, key) in questions" :step="key + 1" :complete="questionsStep > key + 1">
                Name of step 1</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items class="items">
            <v-stepper-content :key="item.fakeId" v-for="(item, key) in questions" :step="key + 1">
                <v-card color="grey lighten-1" class="mb-5" height="200px"/>
                <v-btn color="primary" @click.native="questionsStep = key + 2">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>
<!--
<template>
    <v-stepper v-model="questionsStep">
        <v-stepper-header>
            <v-stepper-header>
                <span v-for="(item) in questions" :key="item.question.index">
                    &lt;!&ndash;<v-stepper-step :step="item.question.index" :complete="questionsStep > item.question.index"/>&ndash;&gt;
                    <v-divider/>
                </span>
            </v-stepper-header>
            &lt;!&ndash;<v-stepper-step :step="key + 1" v-for="(item, key) in questions"  :complete="questionsStep > key + 1"
                            :key="item.question.id"/>
            <v-divider/>
            <v-stepper-step :step="questions.length + 1" :complete="questionsStep > questions.length"/>&ndash;&gt;
        </v-stepper-header>
        <v-stepper-items>
            <v-stepper-content step="1">
                <v-card color="grey lighten-1" class="mb-5" height="200px"/>
                <v-btn color="primary" @click.native="questionsStep = 2">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
                <v-card color="grey lighten-1" class="mb-5" height="200px"/>
                <v-btn color="primary" @click.native="questionsStep = 3">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-5" height="200px"/>
                <v-btn color="primary" @click.native="questionsStep = 1">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            &lt;!&ndash;<v-stepper-content :step="key + 1" v-for="(item, key) in questions" :key="item.question.id">
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
            </v-stepper-content>&ndash;&gt;
        </v-stepper-items>
    </v-stepper>
    &lt;!&ndash;<div></div>&ndash;&gt;
</template>
-->

<script>
import Timer from './Timer'
import axios from 'axios'

export default {
  name: 'Test',
  components: {'test-timer': Timer},
  data: () => ({
    questionsStep: 0,
    answerSelector: '.js__answers',
    answers: [],
    direction: {},
    difficulty: {},
    test: {},
    questions: []
  }),
  beforeCreate () {
    console.log('getting data from api...')
    // axios.get(`http://127.0.0.1:8000/api/test/${this.$route.params.direction}/${this.$route.params.difficulty}`, {
    //   headers: {
    //     'Authorization': localStorage.getItem('token')
    //   }
    // }).then(response => {
    //   console.log(response)
    // })
    axios.get(`http://127.0.0.1:8000/api/test/current`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then(response => {
      this.test = JSON.parse(response.data)
      this.questions = this.test.questions
      for (let index = 0; index < this.questions.length; index++) {
        this.questions[index].fakeId = index + 1
      }
      console.log(this.questions)
    })
  },
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
  }
}
</script>

<style scoped>
    .items:first-child {
        display: block;
    }
    .answers {
        padding: 2%;
    }
</style>
