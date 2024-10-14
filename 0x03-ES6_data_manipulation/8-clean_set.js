export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const filteredString = [...set].filter((string) => string.startsWith(startString))
    .map((string) => string.slice(startString.length));
  return filteredString.join('-');
}
