// Union-Find 알고리즘 with. Map자료구조
function solution(k, room_number) {
  const answer = [];
  const map = new Map();

  function find(room) {
    if (!map.has(room)) {
      map.set(room, room + 1);
      return room;
    }
    const nextRoom = find(map.get(room));
    map.set(room, nextRoom);
    return nextRoom;
  }

  room_number.forEach((room) => {
    const availRoom = find(room);
    answer.push(availRoom);
  });

  return answer;
}
