import { renderHook } from 'tests';

import { useTimeout } from './useTimeout';

describe('useTimeout', () => {
  it('returns a value', async () => {
    const { result } = renderHook(() => useTimeout());

    expect(result.current).toEqual('1');
  });
});
