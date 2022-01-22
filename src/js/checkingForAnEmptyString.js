export function checkingForAnEmptyString(value) {
  if (!value) {
    cleanupRender();
    return;
  }
}
