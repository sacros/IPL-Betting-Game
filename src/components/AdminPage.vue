<template>
    <div v-if="admin === user">
        Admin Page&emsp;&emsp;&emsp;
        <span>Current game is {{currentGame}}</span><br><br><br>
        <input v-model="matchId" placeholder="entr match matchId" />
        <input v-model="teamNameWin" placeholder="entr winning team" />
        <input v-model="teamNameLose" placeholder="entr losing team" />
        <button v-on:click="setResult(matchId, teamNameWin, teamNameLose)">Set Result</button>
        <br>
        <p style="word-wrap: break-word;" v-for="r in resultEvent">{{r | eventsFilter}}<br><br></p>
        <!-- <button @click="getCurrentGame">getCurrentGame</button> -->
    </div>
    <div v-else>
        <h1>Only admin can access this page.</h1>
    </div>
</template>

<script>
import IPLGame from '@/js/iplgame'

export default {
  name: 'adminPage',
  data () {
    return {
      admin: undefined,
      user: undefined,
      matchId: null,
      teamNameWin: null,
      teamNameLose: null,
      currentGame: null,
      resultEvent: null
    }
  },
  computed: {

  },
  filters: {
    eventsFilter (r) {
      return `${r.event} -> ${JSON.stringify(r.args)}`
    }
  },
  beforeCreate: function () {
    IPLGame.init().then(() => {
      this.user = window.web3.eth.accounts[0]
      IPLGame.owner().then((ans) => {
        this.admin = ans
      })
      this.getCurrentGame()
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    setResult: function (matchId, teamNameWin, teamNameLose) {
      IPLGame.setResult(matchId, teamNameWin, teamNameLose).then((exists) => {
        if (exists) {
          console.log(exists)
          alert('Result set')
          // IPLGame.resultSetEvent().then((exists) => {
          //   if (exists) {
          //     console.log(exists)
          //     this.resultEvent = exists
          //     console.log('done')
          //   }
          // })
          this.resultEvent = exists.logs
        }
      })
    },
    // resultSetEvent: function () {
    //   IPLGame.resultSetEvent().then((exists) => {
    //     if (exists) {
    //       console.log(exists)
    //       this.resultEvent = exists
    //     }
    //   })
    // },
    getCurrentGame: function () {
      IPLGame.getCurrentGame().then((ans) => {
        if (ans) {
          this.currentGame = ans
          console.log(this.currentGame)
        }
      })
    }
  }
}
</script>

<style scoped>
  h1 {
      color:red;
  }
</style>
