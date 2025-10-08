import { GroupByFn } from 'group-by/types';

/**
 * @task Group By Property
 * @description Group an array of objects by a given key. For each unique value of that key,
 * collect all objects that share it into an array under that key in the resulting object.
 *
 * @example
 * Input:
 * [
 *   { category: 'fruit', name: 'apple' },
 *   { category: 'vegetable', name: 'carrot' },
 *   { category: 'fruit', name: 'banana' }
 * ]
 *
 * Key: 'category'
 *
 * Output:
 * {
 *   fruit: [
 *     { category: 'fruit', name: 'apple' },
 *     { category: 'fruit', name: 'banana' }
 *   ],
 *   vegetable: [
 *     { category: 'vegetable', name: 'carrot' }
 *   ]
 * }
 */
export const groupBy: GroupByFn = (array, key) => {
  const map = new Map();

  array.forEach((item) => {
    const mapKey = item[key];

    const mapItem = map.get(mapKey);

    if (!mapItem) {
      map.set(mapKey, [item]);
      return;
    }

    map.set(mapKey, [...mapItem, item]);
  });

  return Object.fromEntries(map);
};
