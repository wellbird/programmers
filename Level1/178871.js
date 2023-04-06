function solution(players, callings) {
  let playersObj = {};
  players.map((item, index) => {
    playersObj[item] = index;
  });
  callings.map((item, _) => {
    let idx = playersObj[item];
    let swapPlayer = players[idx - 1];
    playersObj[item] -= 1;
    playersObj[swapPlayer] += 1;
    players[idx] = swapPlayer;
    players[idx - 1] = item;
  });
  return players;
}
