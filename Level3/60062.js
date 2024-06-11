function solution(n, weakPoints, friends) {
  const flattenedWeakPoints = [
    ...weakPoints,
    ...weakPoints.map((point) => point + n),
  ];
  const weakPointsCount = weakPoints.length;
  const friendsCount = friends.length;
  const visits = new Array(friendsCount).fill(0);
  let answer = friendsCount + 1;

  if (weakPointsCount === 1) return 1;

  function permutation(level, selectedFriends) {
    if (level === friendsCount) {
      for (let startIndex = 0; startIndex < weakPointsCount; startIndex++) {
        const endIndex = startIndex + weakPointsCount;
        let currentIndex = startIndex;
        let friendsUsed = 0;

        for (let friend of selectedFriends) {
          if (currentIndex >= endIndex) break;
          friendsUsed += 1;
          const maxDistance = friend + flattenedWeakPoints[currentIndex];

          while (
            currentIndex < endIndex &&
            maxDistance >= flattenedWeakPoints[currentIndex]
          ) {
            currentIndex++;
          }
        }

        if (currentIndex < endIndex) continue;
        answer = Math.min(answer, friendsUsed);
      }
      return;
    }

    for (let i = 0; i < friendsCount; i++) {
      if (visits[i]) continue;
      visits[i] = 1;
      permutation(level + 1, [...selectedFriends, friends[i]]);
      visits[i] = 0;
    }
  }

  permutation(0, []);

  return answer === friendsCount + 1 ? -1 : answer;
}
