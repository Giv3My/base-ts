import { NestedObjectKeysFn } from './types';

/**
 * @task Nested Object Keys
 * @description Return all nested keys of an object as dot-delimited paths.
 * The function should recurse through all nested objects and return full paths to all leaf and intermediate keys.
 *
 * @example
 * Input: { a: { b: { c: 1 } } }
 * Output: ['a', 'a.b', 'a.b.c']
 *
 * Input: { x: 1, y: { z: 2 } }
 * Output: ['x', 'y', 'y.z']
 *
 * Input: {}
 * Output: []
 */
const isObject = (obj: unknown): obj is Record<string, unknown> => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
};

export const nestedObjectKeys: NestedObjectKeysFn = (obj) => {
  const result: string[] = [];

  const helper = (current: Record<string, unknown>, path: string) => {
    for (const key in current) {
      const newPath = path ? `${path}.${key}` : key;
      result.push(newPath);

      if (isObject(current[key])) {
        helper(current[key], newPath);
      }
    }
  };

  helper(obj, '');
  return result;
};
