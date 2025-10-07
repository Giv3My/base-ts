import { ShallowEqualFn } from './types';

/**
 * @task Compare Objects Shallow
 * @description Compare two objects for shallow equality. Two objects are considered shallowly equal if they have the same set of own enumerable properties with equal values using strict comparison (===).
 *
 * This comparison does NOT recurse into nested objects. It only checks top-level keys and values.
 *
 * @example
 * Input:
 * ({ a: 1, b: 2 }, { a: 1, b: 2 }) => true
 * Input:
 * ({ a: 1, b: 2 }, { a: 1, b: 3 }) => false
 * Input:
 * ({ a: 1 }, { a: 1, b: 2 }) => false
 * Input:
 * ({ a: { x: 1 } }, { a: { x: 1 } }) => false // different object references
 * Input:
 * ({ a: { x: 1 } }, { a: obj }) => true // if obj is same reference as value of a
 */
export const shallowEqual: ShallowEqualFn = (a, b) => {
  if (a === b) return true;

  if (typeof a !== 'object' || typeof b !== 'object') return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!b.hasOwnProperty(key)) return false;

    if (a[key] !== b[key]) return false;
  }

  return true;
};
