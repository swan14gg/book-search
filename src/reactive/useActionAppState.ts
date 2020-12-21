import { AppState } from '@/types';

export default function(appState: AppState) {
  function setIsLoading(value: boolean) {
    appState.isLoading = value;
  }
  function setOccuredError(value: boolean) {
    appState.occuredError = value;
  }
  return {
    setIsLoading,
    setOccuredError,
  };
}
