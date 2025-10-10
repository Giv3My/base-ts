import { ParseQueryStringFn } from './types';

/**
 * @task Parse Query String
 * @description Convert a URL query string into an object of key-value pairs.
 * - Each pair is split by `&` and each key/value by `=`.
 * - If no value is provided, treat it as an empty string.
 * - If a key appears multiple times, the last one wins.
 * - Ignore empty pairs.
 *
 * @example
 * Input: 'a=1&b=2'
 * Output: { a: '1', b: '2' }
 *
 * Input: 'a=1&a=2'
 * Output: { a: '2' }
 *
 * Input: 'key=value&empty='
 * Output: { key: 'value', empty: '' }
 */
export const parseQueryString: ParseQueryStringFn = (query) => {
  const pairs = query.split('&');

  return pairs.reduce<Record<string, string>>((acc, pair) => {
    const [key, value] = pair.split('=');

    if (!key) return acc;

    if (!value) {
      acc[key] = '';
      return acc;
    }

    acc[key] = value;
    return acc;
  }, {});
};
