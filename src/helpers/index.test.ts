import { greet } from './index';

describe('greet', () => {
  it('should greet by name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should use default name when not provided', () => {
    expect(greet()).toBe('Hello, World!');
  });
});
