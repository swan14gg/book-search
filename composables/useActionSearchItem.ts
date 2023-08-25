export default function (searchItem: SearchItem) {
  function setIsByRelevance(value: boolean) {
    searchItem.isByRelevance = value;
  }
  return {
    setIsByRelevance,
  };
}
