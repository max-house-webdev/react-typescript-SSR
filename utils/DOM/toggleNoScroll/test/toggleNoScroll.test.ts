import { toggleNoScroll } from '../toggleNoScroll';

describe('toggleNoScroll', () => {
  const id = 'overlay';

  beforeEach(() => {
    document.body.innerHTML = `<div id="${id}"><div/>`;
  });
  test('should not define overlayElement', () => {
    expect(toggleNoScroll('#some-id'));
    expect(document.body.querySelector(id)).toBeNull();
  });

  test('should toggle classNames', () => {
    // add
    expect(toggleNoScroll(id));
    expect(document.body.querySelector(`${id}.overlay`)).toBeDefined();
    // remove
    expect(toggleNoScroll(id));
    expect(document.body.querySelector(`${id}.overlay`)).toBeNull();
  });
});
