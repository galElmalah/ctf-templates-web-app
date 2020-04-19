import { HeaderDriver } from './index.driver';


describe('Header', () => {
  /** @type { HeaderDriver } */
  let driver;
  beforeEach(() => {
    driver = new HeaderDriver()
  });
  it('some fake test', () => {
    expect(1).toBe(1);
  })
});
