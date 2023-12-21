import { validate } from 'compare-versions';

export function myLib1(): string {
  return 'my-lib1';
}

export function doSomethingWithCompareVersion() {
  return validate('1.0.0');
}
