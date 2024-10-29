function createMagicPotion(potions, target) {
    let bestPair = null;
  
    for (let i = 0; i < potions.length; i++) {
      for (let j = i + 1; j < potions.length; j++) {
        if (potions[i] + potions[j] === target) {
          if (!bestPair || j < bestPair[1]) {
            bestPair = [i, j];
          }
        }
      }
    }
    
    return bestPair || undefined;
  }
  
  const potions = [4, 5, 6, 2];
  const goal = 8;
  console.log(createMagicPotion(potions, goal));
  