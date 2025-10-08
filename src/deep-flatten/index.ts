import { DeepFlattenFn } from 'deep-flatten/types';

/**
 * @task Deep Flatten
 * @description Flatten a nested array structure into a single-level array. Any depth of nested arrays should be recursively flattened.
 *
 * @example
 * Input: [1, [2, [3, 4]], 5]
 * Output: [1, 2, 3, 4, 5]
 *
 * Input: [[[[1]]], 2, [3, [4]]]
 * Output: [1, 2, 3, 4]
 *
 * Input: []
 * Output: []
 */
export const deepFlatten: DeepFlattenFn = (input) => {
  return input.reduce<unknown[]>((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(deepFlatten(val));
    }

    acc.push(val);
    return acc;
  }, []);
};
