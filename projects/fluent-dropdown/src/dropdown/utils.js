import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Creates a formatted className from given arguments
 * @param {...any} args - string, array, or object
 * @returns {string} sanitized class-names
 */
export function cn(...classes) {
  return twMerge(clsx(classes));
}
