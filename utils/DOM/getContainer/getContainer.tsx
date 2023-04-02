export function getContainer(selector: string): Element | null {
  const container = document.querySelector(selector);
  if (!container) return null;

  return container;
}
