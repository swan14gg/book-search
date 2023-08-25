export default function () {
  const appState = reactive<AppState>({
    isLoading: false,
    occuredError: false,
  });
  return {
    appState,
  };
}
