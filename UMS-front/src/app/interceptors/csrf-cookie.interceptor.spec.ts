import { TestBed } from '@angular/core/testing';

import { CsrfCookieInterceptor } from './csrf-cookie.interceptor';

describe('CsrfCookieInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CsrfCookieInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CsrfCookieInterceptor = TestBed.inject(CsrfCookieInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
