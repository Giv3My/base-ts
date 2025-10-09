import { MostFrequentCharFn } from './types';

/**
 * @task Most Frequent Character
 * @description Given a string, return the character that appears most frequently.
 * If multiple characters share the same highest frequency, return the one that appears first in the string.
 * If the input string is empty, return an empty string.
 *
 * @example
 * Input: 'aabbbcc'
 * Output: 'b'
 *
 * Input: 'xyz'
 * Output: 'x'
 *
 * Input: ''
 * Output: ''
 */
export const mostFrequentChar: MostFrequentCharFn = (text) => {
  if (!text) {
    return '';
  }

  const textArray = [...text];

  const freq = textArray.reduce<Record<string, number>>((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return textArray.sort((a, b) => {
    if (freq[b] === freq[a]) {
      return text.indexOf(a) - text.indexOf(b);
    }
    return freq[b] - freq[a];
  })[0];
};
