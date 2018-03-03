<template>
    <v-stepper v-model="questionsStep" vertical>
        <ul>
            <li v-for="(item, key) in test.questions" :key="item.index" class="item">
                <v-stepper-step :step="key + 1" :complete="questionsStep > key + 1"/>
                <v-stepper-content
                        :step="key + 1">
                    <v-card color="lighten-1" class="mb-5">
                        <div class="answers js__answers">
                            <p>{{ item.question.text }}</p>
                            <v-checkbox v-for="(answer) in item.question.answers" :key="answer.id"
                                        :label="answer.text"
                                        v-model="answers"
                                        :value="answer.id"
                            />
                            <!--<span>Отмеченные имена: {{ answers }}</span>-->
                        </div>
                    </v-card>
                    <v-btn color="info" v-if="answers.length > 0" @click.native="questionsStep = key + 2"
                           v-on:click="send(test.id, item, answers)">Apply</v-btn>
                    <v-btn color="info" v-else disabled="">Apply</v-btn>
                    <v-btn color="error" v-on:click="pause()">Pause</v-btn>
                </v-stepper-content>
            </li>
        </ul>
    </v-stepper>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      questionsStep: 1,
      test: {},
      answers: []
    }
  },
  created () {
    axios.get(`http://127.0.0.1:8000/api/test/current`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then(response => {
      this.test = JSON.parse(response.data)
      for (let index = 0; index < this.test.questions.length; index++) {
        this.test.questions[index].index = index + 1
        console.log(this.test.questions[index].question.answers)
      }
      console.log(this.test)
    })
  },
  methods: {
    send: function (test, question, answers) {
      console.log("send users' answers")
      console.log({
        test: test,
        question: question.id,
        answers: answers
      })
      /* let request = {test: test, question: question.id, answers: answers}
      let config = {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      } */
      /* axios.post('http://127.0.0.1:8000/api/test/answer', request, config)
        .then(response => {
          console.log(JSON.parse(response.data))
        })
        .catch(reason => {
          console.log(reason)
        }) */
      /* axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/test/answer',
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        data: {
          test: test,
          question: question.id,
          answers: answers
        }
      }) */

      if (question === this.test.questions[this.test.questions.length - 1]) {
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

<style>
    .item:first-child .stepper__content {
        display: block!important;
    }
    .answers {
        padding: 2px;
    }
</style>
