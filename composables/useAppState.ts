export default function () {
  const appState = reactive<AppState>({
    isLoading: false,
    occuredError: false,
  });
  function setIsLoading(value: boolean) {
    appState.isLoading = value;
  }
  function setOccuredError(value: boolean) {
    appState.occuredError = value;
  }
  return {
    appState,
    setIsLoading,
    setOccuredError,
  };
}
