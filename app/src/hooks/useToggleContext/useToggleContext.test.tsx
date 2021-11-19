import { renderHook } from 'tests';

import { useToggleContext } from './useToggleContext';

describe('useToggleContext', () => {
  it('returns a value', async () => {
    const { result } = renderHook(() => useToggleContext());

    expect(result.current).toEqual('1');
  });
});
