import { createClient, Request } from '../lib/HTTPClient';
import store from './../store';
import { setFetching } from '../store/ducks/transport';

const client = createClient({
  baseUrl: `https://gist.githubusercontent.com/alpatovdanila`,
});

export const request = (props: Request) => {
  // @ts-ignore
  store.dispatch(setFetching(true));
  // @ts-ignore
  return client(props).finally(() => store.dispatch(setFetching(false)));
};
