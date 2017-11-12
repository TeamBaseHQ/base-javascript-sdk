import Base from './Base';
import BaseApp from './BaseApp';

describe('Base JavaScript SDK Tests', () => {
  it('Base API status should be 200 OK', () => {
    let base;
    base = new Base(new BaseApp('1', 'abcd', 'https://baseapp-backend.kunalvarma.in/api'));
    base.get('/').then((response) => {
      expect(response.status).toBe(200);
    });
  });
});
