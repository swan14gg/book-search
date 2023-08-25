export default function () {
  const searchItem = reactive<SearchItem>({
    searchTarget: "",
    isByRelevance: true,
  });
  return {
    searchItem,
  };
}
