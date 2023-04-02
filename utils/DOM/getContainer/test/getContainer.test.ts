import { getContainer } from '../getContainer';

describe('getContainer', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="container"><div/>';
  });

  test('should define container', () => {
    expect(getContainer('#container')).toBeDefined();
  });

  test('should return null if container is not defined', () => {
    expect(getContainer('#someId')).toBeNull();
  });
});
