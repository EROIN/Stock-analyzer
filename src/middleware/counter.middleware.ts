export function fetchCount(amount = 1): Promise<any> {
  return new Promise(resolve => setTimeout(() => resolve({data: amount}), 500));
}
