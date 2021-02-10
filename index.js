const random = require('lodash.random');

const iterations = 1000000;
const startingWallet = 10000;
// american table
const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];

const trial = ({wallet, red, first12, second12, third12, outcomes}) => {
    let max = wallet; // max held at any given round
    let maxRound = 0;
    console.log(`\nYou approach a ${outcomes} outcomes table with $${wallet} and use a strategy of $${first12} on 1st 12, $${second12} on 2nd 12, $${third12} on 3rd 12, and ${red} on red`);
    for(let i=0; i<iterations; i++){
        if(wallet > startingWallet){
            maxRound = i+1;
            max = wallet;
        }
        if(wallet > startingWallet*2){
            console.log(`🤑 holy smokes! You doubled your starting money to $${wallet}. Walk away!`);
            return {wallet};
        }
        // if(wallet > startingWallet){
        //     console.log(`🤑 you are ahead! You could walk away with $${wallet} balance now. But you keep playing...`);
        // }
        if(wallet < red+first12+second12+third12){
            console.log(`😭 You went from ($${startingWallet}) to ${wallet} in ${i+1} rounds\nYou achieved your highest wallet balance in round ${maxRound} with $${max}`);
            return {wallet};
        }
        // put the money on the table
        wallet =  wallet - red - first12 - second12 - third12;
        // spin
        // an outcome of 37 = Black 0
        // an outcome of 38 = Black 00
        // American table has 38 outcomes, European has 37
        let outcome = random(1,outcomes);

        let is1st12 = outcome < 13;
        let is2nd12 = outcome > 12 && outcome < 25;
        let is3rd12 = outcome > 24 && outcome < 37;
        let isRed = redNumbers.includes(outcome);
        
        // recieve 2x + initial stake
        if(is1st12) wallet += first12+(first12*2);
        // recieve 2x + initial stake
        if(is2nd12) wallet += second12+(second12*2);
        // recieve 2x + initial stake
        if(is3rd12) wallet += third12+(third12*2);
        // recieve 2x stake
        if(isRed)  wallet += red*2;
    }
    console.log(`😓 played ${iterations} rounds and stopped.\nYou achieved your highest wallet balance in round ${maxRound} with $${max}\nFinal wallet balance is ${wallet}`)
    return {wallet};
}

trial({wallet:startingWallet, red: 3, first12: 2, second12: 2, third12: 0, outcomes: 38});
trial({wallet:startingWallet, red: 1, first12: 2, second12: 2, third12: 0, outcomes: 38});
trial({wallet:startingWallet, red: 0, first12: 2, second12: 2, third12: 2, outcomes: 38});
trial({wallet:startingWallet, red: 0, first12: 2, second12: 2, third12: 0, outcomes: 38});
trial({wallet:startingWallet, red: 0, first12: 2, second12: 2, third12: 0, outcomes: 37});