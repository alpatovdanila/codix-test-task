import { createClient } from '../lib/HTTPClient';


export const request = createClient({
  baseUrl: `https://gist.githubusercontent.com/alpatovdanila`,
});
