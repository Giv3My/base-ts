import { CalculateAverageRatingsFn } from 'movie-average-rating/types';

/**
 * @task Calculate Average Movie Ratings
 * @description Given an array of user ratings, calculate the average score for each movie.
 * Each movie may have one or more ratings, and the result should contain the movie ID and its average score.
 * Average Score should be rounded to the nearest decimal (one number)
 * @example
 * Input:
 * [
 *   { userId: 1, movieId: 10, score: 8 },
 *   { userId: 2, movieId: 10, score: 6 },
 *   { userId: 3, movieId: 11, score: 7 }
 * ]
 *
 * Output:
 * [
 *   { movieId: 10, averageScore: 7 },
 *   { movieId: 11, averageScore: 7 }
 * ]
 */
const groupBy = <T>(array: T[], key: keyof T): Record<keyof T, T[]> => {
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

export const calculateAverageRatings: CalculateAverageRatingsFn = (ratings) => {
  const groupedRatings = groupBy(ratings, 'movieId');

  const result = Object.entries(groupedRatings).map(([movieId, ratings]) => {
    const total = ratings.reduce((acc, rating) => acc + rating.score, 0);
    const average = total / ratings.length;

    return {
      movieId: Number(movieId),
      averageScore: Math.round(average * 10) / 10,
    };
  });

  return result;
};
