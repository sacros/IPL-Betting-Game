<template>
    <div v-if="admin === user">
        Admin Page, mah bruv :P<br>
        <input v-model="matchId" placeholder="entr match matchId" />
        <input v-model="teamNameWin" placeholder="entr winning team" />
        <input v-model="teamNameLose" placeholder="entr losing team" />
        <button v-on:click="setResult(matchId, teamNameWin, teamNameLose)">Set Result</button>
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
      teamNameLose: null
    }
  },
  computed: {

  },
  beforeCreate: function () {
    IPLGame.init().then(() => {
      this.user = window.web3.eth.accounts[0]
      IPLGame.owner().then((ans) => {
        this.admin = ans
      })
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
