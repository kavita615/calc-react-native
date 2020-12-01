import {useCallback} from 'react';
import {useQueryCache} from 'react-query';
import AppStateHandler from 'src/StateHandlers/AppStateHandler';
import SnackbarHandler from 'src/Utils/Shared/SnackbarHandler';
import useApiMutation from '../Shared/useApiMutation';

function useAuth() {
  const [mutate, {status}] = useApiMutation({});
  const queryCache = useQueryCache();

  const login = useCallback(
    ({email, password}) => {
      queryCache.clear();
      mutate(
        {
          url: '/login',
          data: {email, password},
          method: 'POST',
        },
        {
          onSuccess: (response) => {
            const {status: statusCode, data} = response;
            if (statusCode === 200) {
              console.log(data);
              AppStateHandler.login({
                token: data?.token,
                user: {email, password},
              });
              SnackbarHandler.successToast('Logged in successfully');
            }
          },
        },
      );
    },
    [mutate, queryCache],
  );

  return {login, loading: status === 'loading'};
}

export default useAuth;
