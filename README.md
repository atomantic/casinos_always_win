# Casinos Always Win

A simple app to demonstrate that playing any strategy on a standard american roulette table yeilds an empty balance for the player on a long enough timeline.

American tables have 38 outcomes (1-36 + 0 + 00).
European tables have 37 outcomes (1-36 + 0).

```
You approach a 38 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $0 on 3rd 12, and 3 on red
😭 wallet exhausted! You lost all your money ($10000) after 24383 rounds
(final wallet balance is $6, not enough to keep playing this strategy)

You approach a 38 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $0 on 3rd 12, and 1 on red
😭 wallet exhausted! You lost all your money ($10000) after 34544 rounds
(final wallet balance is $1, not enough to keep playing this strategy)

You approach a 38 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $2 on 3rd 12, and 0 on red
😭 wallet exhausted! You lost all your money ($10000) after 31824 rounds
(final wallet balance is $4, not enough to keep playing this strategy)

You approach a 38 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $0 on 3rd 12, and 0 on red
😭 wallet exhausted! You lost all your money ($10000) after 43716 rounds
(final wallet balance is $2, not enough to keep playing this strategy)

You approach a 37 outcomes table with $10000 and use a strategy of $2 on 1st 12, $2 on 2nd 12, $0 on 3rd 12, and 0 on red
😭 wallet exhausted! You lost all your money ($10000) after 98802 rounds
(final wallet balance is $2, not enough to keep playing this strategy)
```

This came up when a friend suggested a betting strategy of always putting the same bet on both 1st 12 and 2nd 12, which have 2:1 payout. 

The trouble is that the probabilities for any bet are on the casinos side.

# To Run

```
npm i
node .
```