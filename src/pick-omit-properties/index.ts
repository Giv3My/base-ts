import { PickOmitMode } from './types';

/**
 * @task Pick or Omit Properties
 * @description Given an object and an array of keys, return a new object based on the mode:
 * - If mode is `'pick'`, include only the specified keys.
 * - If mode is `'omit'`, exclude the specified keys.
 *
 * @example
 * Input: ({ a: 1, b: 2, c: 3 }, ['a', 'c'], 'pick')
 * Output: { a: 1, c: 3 }
 *
 * Input: ({ a: 1, b: 2, c: 3 }, ['b'], 'omit')
 * Output: { a: 1, c: 3 }
 */
export const pickOmitProperties = <T extends Record<string, unknown>>(
  obj: T,
  keys: (keyof T)[],
  mode: PickOmitMode,
): Partial<T> => {
  if (mode === 'pick') {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => keys.includes(key)),
    ) as Partial<T>;
  }

  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key)),
  ) as Partial<T>;
};
