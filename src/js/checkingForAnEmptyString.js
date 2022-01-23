import { cleanupRender } from './cleanupRender';

export function checkingForAnEmptyString(value) {
  if (!value) {
    cleanupRender();
    return;
  }
}
