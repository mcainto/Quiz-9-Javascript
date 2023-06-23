function findLongestDistance(blocks) {
  const N = blocks.length;
  let maxDistance = 0;

  for (let i = 0; i < N; i++) {
    let j = i + 1;
    while (j < N && blocks[j] >= blocks[j - 1]) {
      j++;
    }
    maxDistance = Math.max(maxDistance, j - i);
  }

  return maxDistance;
}

// Example usage
const blocks = [1, 3, 5, 6, 3, 2, 4, 8];
const longestDistance = findLongestDistance(blocks);

console.log("Longest Distance: ", longestDistance);

