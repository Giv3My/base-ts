import { GroupByFirstLetterFn } from 'group-by-first-letter/types';

/**
 * @task Group By First Letter
 * @description Group an array of words by their first letter. If a word is an empty string, it should be grouped under the empty string key ('').
 *
 * @example
 * Input: ['apple', 'banana', 'avocado']
 * Output: {
 *   a: ['apple', 'avocado'],
 *   b: ['banana']
 * }
 *
 * Input: ['car', 'cat', 'dog']
 * Output: {
 *   c: ['car', 'cat'],
 *   d: ['dog']
 * }
 *
 * Input: ['apple', '']
 * Output: {
 *   a: ['apple'],
 *   '': ['']
 * }
 */
export const groupByFirstLetter: GroupByFirstLetterFn = (words) => {
  return words.reduce<Record<string, string[]>>((acc, word) => {
    const key = word[0] || '';
    const exists = key in acc;

    if (exists) {
      acc[key].push(word);
      return acc;
    }

    acc[key] = [word];
    return acc;
  }, {});
};
