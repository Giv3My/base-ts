import { CreateBreadcrumbsFn } from './types';

/**
 * @task Create Breadcrumbs Path
 * @description Convert an array of pathname strings into an array of breadcrumb objects. Each breadcrumb contains the original path and a label that is based on the last segment of the path.
 * - If the path is exactly `/`, use 'Home' as the label.
 * - Otherwise, trim slashes and capitalize the last segment of the path.
 *
 * @example
 * Input:
 * ['/home', '/home/products', '/home/products/electronics']
 * Output:
 * [
 *   { path: '/home', label: 'Home' },
 *   { path: '/home/products', label: 'Products' },
 *   { path: '/home/products/electronics', label: 'Electronics' }
 * ]
 */
const capitalizeString = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const createBreadcrumbs: CreateBreadcrumbsFn = (paths) => {
  return paths.map((path) => {
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments.at(-1);

    if (!lastSegment) {
      return { path: '/', label: 'Home' };
    }

    const label = capitalizeString(lastSegment);

    return {
      path,
      label,
    };
  });
};
