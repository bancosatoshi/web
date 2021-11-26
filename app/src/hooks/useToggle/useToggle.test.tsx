import { renderHook } from 'tests';

import { useToggle } from './useToggle';

describe('useToggle', () => {
  it('returns a value', async () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current).toEqual('1');
  });
});
