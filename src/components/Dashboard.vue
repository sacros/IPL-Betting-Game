<template>
  <div class="dashboard">
    <img src="../assets/ipl.jpg">
    <h1>{{ msg }}</h1>
    <div v-if="admin === user">
      <!-- Welcome {{ admin }} admin. Destroy your account by clicking <a href="#" @click="destroyAccount">here</a>. -->
      Hey admin {{admin}}. Click <router-link to="/adminPage">here</router-link> to manage bets.
      <br>
      <a href="#" @click="destroyAccount">Kill the contract</a>
    </div>
    <div v-else>Make Bets here..
      <router-link to="/betPage">here</router-link>.
    </div>
  </div>
</template>

<script>
// import Users from '@/js/users'
import IPLGame from '@/js/iplgame'

export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome to IPL Betting Game!',
      admin: undefined,
      user: undefined
    }
  },
  computed: {
    userExists: function () {
      return (typeof this.pseudo !== 'undefined')
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
      })
      // IPLGame.exists(window.web3.eth.accounts[0]).then((exists) => {
      //   if (exists) {
      //     console.log(exists)
      //     this.admin = IPLGame.contract.address
      //     // IPLGame.authenticate().then(admin => {
      //     //   this.admin = admin
      //     // })
      //   }
      // })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    destroyAccount: function (e) {
      e.preventDefault()
      IPLGame.kill().then(() => {
        this.admin = undefined
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


</style>
