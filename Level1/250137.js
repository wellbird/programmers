function solution(bandage, health, attacks) {
  let curHealth = health;
  let curTime = 0;
  for (const [time, damage] of attacks) {
    const healTime = time - curTime - 1;
    const heal = healTime * bandage[1];
    const additionalHeal = Math.floor(healTime / bandage[0]) * bandage[2];
    curHealth =
      curHealth + heal + additionalHeal > health
        ? health
        : curHealth + heal + additionalHeal;
    curHealth -= damage;
    if (curHealth <= 0) return -1;
    curTime = time;
  }
  return curHealth;
}
