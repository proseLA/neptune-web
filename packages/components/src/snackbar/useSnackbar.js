import { useContext } from 'react';
import { SnackbarContext } from './SnackbarContext';

function useSnackbar() {
  const { createSnackbar } = useContext(SnackbarContext);

  return createSnackbar;
}

export default useSnackbar;
