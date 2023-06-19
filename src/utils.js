import estimates from './JSON/getAllEstimatesResponse.json';

// fetch all estimates from json file
export async function fetchEstimates() {
  return estimates;
}
// filter estimated by selected chip
export async function searchEstimateByFilter(filter) {
  if (filter === 'all') {
    return estimates;
  }
  const filteredEstimates = estimates.filter((estimates) => {
    if (filter === status_label) {
      return estimates;
    }
  });

  return filteredEstimates;
}
