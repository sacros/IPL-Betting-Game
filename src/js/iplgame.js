import contract from 'truffle-contract'
import IPLGameContract from '@contracts/IPLGame.json'

const IPLGame = {

  contract: null,

  instance: null,

  contract_owner: null,

  owner: function () {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.owner.call(
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  init: function () {
    let self = this

    return new Promise(function (resolve, reject) {
      self.contract = contract(IPLGameContract)
      self.contract.setProvider(window.web3.currentProvider)

      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  kill: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.kill(
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },
  makeBet: function (_matchId, _team, _amount) {
    let self = this
    let _timestamp = Math.round(Date.now() / 1000)
    return new Promise((resolve, reject) => {
      self.instance.makeBet(
        _matchId, _team, _timestamp,
        {from: window.web3.eth.accounts[0],
          gas: 200000,
          value: _amount * 1000000000000000}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  getPredictions: function (_matchId, _team) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.getPredictions.call(
        _matchId, _team,
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  getPredictionNumber: function (_matchId, _team) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.getPredictionNumber.call(
        _matchId, _team,
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  setResult: function (_matchId, _winningTeamId, _losingTeamId) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.setResult(
        _matchId, _winningTeamId, _losingTeamId,
        {from: window.web3.eth.accounts[0]}
      ).then(exists => {
        resolve(exists)
      }).catch(err => {
        reject(err)
      })
    })
  },

  getResult: function (_matchId) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.getResult.call(
        _matchId,
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  playerBalance: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.playerBalance.call(
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  getCurrentGame: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.getCurrentGame.call(
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  // resultSetEvent: function () {
  //   let self = this

  //   return new Promise((resolve, reject) => {
  //     self.instance.ResultSet({}, {fromBlock: 0, toBlock: 'latest'}).get((tx) => {
  //       resolve(tx)
  //     })
  //   })
  // },

  winnerEvent: function (address) {
    let self = this
    return new Promise((resolve, reject) => {
      console.log('at winnerEvent')
      var eventWinner = self.instance.Winner({winner: address})
      eventWinner.get((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  },
  resultsEvent: function (matchId) {
    let self = this
    return new Promise((resolve, reject) => {
      console.log('at winnerEvent')
      var eventWinner = self.instance.ResultSet({matchId: matchId})
      eventWinner.get((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  },
  winnersEvent: function (matchId) {
    let self = this
    return new Promise((resolve, reject) => {
      console.log('at winnerEvent')
      var eventWinner = self.instance.Winners({matchId: matchId})
      eventWinner.get((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  },
  losersEvent: function (matchId) {
    let self = this
    return new Promise((resolve, reject) => {
      console.log('at winnerEvent')
      var eventWinner = self.instance.Losers({matchId: matchId})
      eventWinner.get((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
}

export default IPLGame
