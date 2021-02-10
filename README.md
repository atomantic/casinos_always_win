# Casinos Always Win

A simple app to demonstrate that playing any strategy on a standard american roulette table yeilds an empty balance for the player on a long enough timeline.

American tables have 38 outcomes (1-36 + 0 + 00).
European tables have 37 outcomes (1-36 + 0).

```
You approach a 38 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $0 on 3rd 12, and 3 on red
😭 You went from ($10000) to 4 in 28789 rounds
You achieved your highest wallet balance in round 12 with $10001

You approach a 38 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $0 on 3rd 12, and 1 on red
😭 You went from ($10000) to 4 in 38633 rounds
You achieved your highest wallet balance in round 0 with $10000

You approach a 38 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $2 on 3rd 12, and 0 on red
😭 You went from ($10000) to 4 in 31181 rounds
You achieved your highest wallet balance in round 0 with $10000

You approach a 38 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $0 on 3rd 12, and 0 on red
😭 You went from ($10000) to 0 in 47309 rounds
You achieved your highest wallet balance in round 5 with $10002

You approach a 37 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $0 on 3rd 12, and 0 on red
😭 You went from ($10000) to 0 in 95852 rounds
You achieved your highest wallet balance in round 140 with $10002
```

This came up when a friend suggested a betting strategy of always putting the same bet on both 1st 12 and 2nd 12, which have 2:1 payout. 

The trouble is that the probabilities for any bet are on the casinos side.

# To Run

```
npm i
node .
```