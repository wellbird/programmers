function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  cities.map((item, index) => {
    item = item.toLowerCase();
    if (cache.includes(item)) {
      answer += 1;
      cache.splice(cache.indexOf(item), 1);
      cache.push(item);
    } else {
      answer += 5;
      if (cacheSize !== 0) {
        if (cache.length === cacheSize) {
          cache.shift();
        }
        cache.push(item);
      }
    }
  });
  return answer;
}

// 다른사람의 풀이 - Map을 이용한 풀이
// function solution(cacheSize, cities) {
//     const map = new Map();
//     const cacheHit = (city, map) => {
//         map.delete(city);
//         map.set(city, city);
//         return 1;
//     };
//     const cacheMiss = (city, map, size) => {
//         if(size === 0) return 5;
//         (map.size === size) && map.delete(map.keys().next().value);
//         map.set(city, city);
//         return 5;
//     };
//     const getTimeCache = (city, map, size) => (map.has(city.toLocaleLowerCase()) ? cacheHit : cacheMiss)(city.toLocaleLowerCase(), map, size);
//     return cities.map(city => getTimeCache(city.toLocaleLowerCase(), map, cacheSize)).reduce( (a, c) => a + c, 0);
// }
