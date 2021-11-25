import { TestBed } from '@angular/core/testing';

import { LocalCacheInterceptor } from './local-cache.interceptor';

describe('LocalCacheInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LocalCacheInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LocalCacheInterceptor = TestBed.inject(LocalCacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
