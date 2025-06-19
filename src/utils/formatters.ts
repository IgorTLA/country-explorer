export function formatPopulation(population: number): string {
  if (population >= 1000000000) {
    return `${(population / 1000000000).toFixed(1)}B`;
  }
  if (population >= 1000000) {
    return `${(population / 1000000).toFixed(1)}M`;
  }
  if (population >= 1000) {
    return `${(population / 1000).toFixed(1)}K`;
  }
  return population.toLocaleString();
}
