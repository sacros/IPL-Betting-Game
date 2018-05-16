<template>
<div>
    <h1>
        Make your bets bruv
    </h1>
    <div>
        <button id="match" v-for="currentGame in currentGames" @click="setOptions(currentGame)">{{currentGame | match}}</button>
    </div>

    <div id="outer">
    <div id="inner">
    <img id="conversion" src="../assets/conversion.png">
    </div>
    <span>Your balance: {{bettor_balance}} finney</span>
    <div id="inner" style="margin-top:8%;">
    <select v-model="selected_team">
    <!-- <option value="Select a match">Select a match</option> -->
    <option v-for="option in options" v-bind:value="option">
        {{ option }}
    </option>
    </select>
    <input v-model="bet_amount" placeholder="Entr amount to bet" />(in finney)
    <button @click="makeBet">Make bet</button>
    <div id="bet_ratio">Betting Ratio: {{options[0]}} {{placed_team_one}} {{options[1]}} {{placed_team_two}}</div>
    </div>
    </div>
</div>
</template>

<script>
import IPLGame from '@/js/iplgame'
export default {
  name: 'betPage',
  data () {
    return {
      currentGames: [
          {'match_id': 1, 'team_one': 'CSK', 'team_two': 'DD', 'date': '17/05/2018'},
          {'match_id': 2, 'team_one': 'SRH', 'team_two': 'KXIP', 'date': '17/05/2018'}
      ],
      options: ['Select team', 'Select team'],
      selected_team: null,
      selected_match: null,
      bet_amount: null,
      bettor_balance: null,
      placed_team_one: null,
      placed_team_two: null
    }
  },
  filters: {
    match (game) {
      return `${game.date} -> ${game.team_one} vs ${game.team_two}`
    }
  },
  beforeCreate: function () {
    IPLGame.init().then(() => {
      console.log('contract: ' + IPLGame.contract.address)
      console.log('user: ' + window.web3.eth.accounts[0])
      this.user = window.web3.eth.accounts[0]
      IPLGame.owner().then((ans) => {
        console.log('admin: ' + ans)
        this.admin = ans
        IPLGame.playerBalance().then((ans) => {
          this.bettor_balance = ans
          console.log(this.bettor_balance)
        })
      })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    setOptions: function (game) {
      this.options = [game.team_one, game.team_two]
      this.selected_match = game.match_id
      console.log(this.options)
      console.log(this.selected_match)
      console.log(this.bet_amount)
    },
    makeBet: function () {
      console.log('sending data' + this.selected_match + this.selected_team + Math.round(Date.now() / 1000))
      IPLGame.makeBet(this.selected_match, this.selected_team, this.bet_amount).then((exists) => {
        if (exists) {
          console.log(exists)
          alert('Bet placed!')
          IPLGame.getPredictionNumber(this.selected_match, this.options[0]).then((exists) => {
            if (exists) {
              console.log('#people_one: ' + exists)
              this.placed_team_one = exists
              IPLGame.getPredictionNumber(this.selected_match, this.options[1]).then((exists) => {
                console.log('#people_two: ' + exists)
                this.placed_team_two = exists
                document.getElementById('bet_ratio').style.display = 'block'
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
#match {
    background: rgb(96, 159, 170);
    text-align: center;
    padding: 20px;
    width: 100%;
    font-size: 30px;
    color: white;
}
#test {
    display: inline;
}
#inner {
    float: left;
    clear: right;
    width: 50%;

}
#outer {
    overflow: auto;
}
#bet_ratio {
    display: none;
}
</style>
