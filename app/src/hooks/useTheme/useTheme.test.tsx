import { renderHook } from 'tests';

import { useTheme } from './useTheme';

describe('useTheme', () => {
  it('returns a value', async () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toEqual('1');
  });
});
