IPL Game
Introduction:
A system where no party trusts each other, make a perfect use case of Blockchain.
A betting/game system currently requires the participant to trust a single system for a fair play, managing deposits, and operations.
Blockchain makes all these management decentralized, trustless, secure, and immutable.
Since all the necessary operations are programmed in the “Smart contracts”, they are also automated, and proceed with the expected outcome.
“Smart contract is a code which runs on blockchain, and is analogous to a traditional contract, but also automatically enforce the required obligations. “
“A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract. Smart contracts allow the performance of credible transactions without third parties” – wikipedia
This system, when run on blockchain also provides transparency to the participants, so as to make it an open and fair alternative to the current system.
Note: Smart contract can be also made open sourced, and available to all. 

Every (betting) game depends on the outcome of play.
For our system, the outcomes are objective truth, which can be verified by anyone (eg. watching the event on TV, getting scores from official sources).
The only attack there might be in the system is of mis-report of result. In that case, all participants of the match will be affected, with the indisputable evidence on the blockchain. This can be simply taken care of.

Prerequisites:
The system requires the participant to have an account on the blockchain ecosystem (Ethereum), and all the transactions that are to be performed, will be from the balance of the participant.
Ethers can be bought from many crypto exchange like coinbase, poloniex, etc.
The participant also need a way to connect their account to the system’s web application(DApp).
This could be done either by using web3 enabled browsers, like Mist, Brave;  Chrome browser could also be used with the Metamask extension.
Working of the system:

How to Use:
When a participant logs into the system, he/she will be able to see all the current matches/games on which to bet/play.
The cost of betting transaction is the sum of bet amount and the “gas” cost.
“Gas is a transaction fee required when interacting with the smart contract. The gas depends on the logic implemented on the smart contract. “
The participant then selects the match, the team to play the bet on, and the amount to bet.
After he/she places a bet successfully, the system displays the current odds for the match (number of bets for each team).

After the result is set, the participant can access all the logs.
This includes details about:
1.	Previous matches (match number, winning team, losing team)
2.	All wins (bet details where the participant won)
3.	Winners (address of all winning participants)
4.	Losers (address of all losing participants)

Checks:
Minimum bet amount, lesser that which, the bet won’t be placed.
Cut-off time, time after which a bet won’t be placed.
Double bet, a participant can only place a bet for a match once. 

Admin:
There is also an admin system, where results for each match can be set.
After the result is set, all the winners will get the amount directly credited to their account.





Process Flow:
1.	Login to account
2.	Credit some value to account
3.	Select match, team, amount
4.	Place bet
5.	Displayed current betting odds
6.	Set game result (ADMIN)
7.	Amount credit to account
8.	Get all logs (match details, all wins, winners and losers of all matches, amount won/lost)


Betting logic:
The current logic that the system follows is:
All the amount generated after participants place the bets, is transferred to the account of the admin (smart contract creator).
All the participants who lose, won’t get any amount credit. The amount from their bets is the total of what the system distributes the winning participants.
The winning participants get “refund” of their bets, and the “win amount”.
“refund because in the worst-case scenario, system doesn’t let any winner incur any cost”
“The win amount is the weighted ratio of participants. “
Also, the system can also charge commission from the total amount to be distributed to the winner.











Example:
Match: CSK vs DD,
Players: Alice, Bob, Craig, Dan, Eve
Predictions: 
Alice: Team=CSK, Amount=10 finney
Bob: Team=CSK, Amount=15 finney
Craig: Team=CSK, Amount=25 finney
Dan: Team=DD, Amount=20 finney
Eve: Team=DD, Amount=30 finney
Result: Winner=DD, Loser=CSK
Winners: Dan, Eve
Losers: Alice, Bob, Craig
Amount to distribute: (10 + 15 + 25) = 50 finney
After commission (10%): (0.9 * 50) = 45 finney
Win amounts:
Dan: 20 + (45*20/50) = (20 + 18) = 38 finney
Eve: 30 + (45*30/50) = (30 + 27) = 57 finney
Profits:
Dan: 18 finney
Eve:  27 finney





Pros:
1.	Since the system runs on blockchain, there is no central body which runs the system. It is decentralized, and all its data is immutable.
2.	The system provides transparency to its participants, where each user can access the system transactions. This also provides a good way for auditing the system.
3.	The system provides pseudonymity. The identification of any participant can be done only based on its address on the blockchain.
4.	All the transactions done on the system are safe, and verified by a vast P2P global network (Ethereum).

Cons:
1.	The winning amount depends solely on the amount of generated from the losing participants. So, for a big winning amount, there has to be large number of losers.
2.	There is gas fees for each transaction while placing the bet depends on the smart contract code. So, if the code logic is complex(storage/memory-wise), the gas might be high.


Future Scope:
1.	The setting of result can also be automatized by using “Oracles”.
2.	If using oracles, there are options for distributed oracles, or multi-sig oracles.
3.	The system can implement betting odds. 

“In the blockchain space, an oracle is a party which provides data. The need for such figure arise from the fact that blockchain applications, such as Bitcoin scripts and smart contracts cannot access and fetch directly the data they require: price feeds for assets and financial applications; weather-related information for peer-to-peer insurance; random number generation for gambling. ” – oraclize.it
