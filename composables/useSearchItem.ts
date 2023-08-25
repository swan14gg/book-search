export default function () {
  const searchItem = reactive<SearchItem>({
    searchTarget: "",
    isByRelevance: true,
  });
  function setIsByRelevance(value: boolean) {
    searchItem.isByRelevance = value;
  }
  return {
    searchItem,
    setIsByRelevance,
  };
}
