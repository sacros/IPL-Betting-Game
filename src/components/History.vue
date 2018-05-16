<template>
<div>
    Get your Win results: <button v-on:click="winnerEvent">Your wins</button><br>
    Get the result of match: <input v-model="matchId_1" placeholder="Entr match ID"/><button v-on:click="resultsEvent">get result</button><br>
    Get winners of match: <input v-model="matchId_2" placeholder="Entr match ID"/><button v-on:click="winnersEvent">get result</button><br>
    Get losers of match: <input v-model="matchId_3" placeholder="Entr match ID"/><button v-on:click="losersEvent">get result</button><br>
    <span v-if="ans != undefined">{{ans[0] | eventsFilter}}</span>
</div>
</template>

<script>
import IPLGame from '@/js/iplgame.js'
export default {
  data () {
    return {
      ans: null,
      user: undefined,
      matchId_1: null,
      matchId_2: null,
      matchId_3: null
    }
  },
  filters: {
    eventsFilter (r) {
      return `${r.event} -> ${JSON.stringify(r.args)}`
    }
  },
  beforeCreate: function () {
    IPLGame.init().then(() => {
      console.log('user: ' + window.web3.eth.accounts[0])
      this.user = window.web3.eth.accounts[0]
    //   IPLGame.owner().then((ans) => {
    //     console.log('admin: ' + ans)
    //     this.admin = ans
    //     IPLGame.playerBalance().then((ans) => {
    //       this.bettor_balance = ans
    //       console.log(this.bettor_balance)
    //     })
    //   })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    winnerEvent: function () {
      IPLGame.winnerEvent(this.user).then((tx) => {
        this.ans = tx
        console.log(tx)
      })
    },
    resultsEvent: function () {
      IPLGame.resultsEvent(this.matchId_1).then((tx) => {
        this.ans = tx
        console.log(tx)
      })
    },
    winnersEvent: function () {
      IPLGame.winnersEvent(this.matchId_2).then((tx) => {
        this.ans = tx
        console.log(tx)
      })
    },
    losersEvent: function () {
      IPLGame.losersEvent(this.matchId_3).then((tx) => {
        this.ans = tx
        console.log(tx)
      })
    }
  }
}
</script>

<style scoped>

</style>
