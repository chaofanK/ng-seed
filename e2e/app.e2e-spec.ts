import { XAppPage } from './app.po';

describe('x-app App', () => {
  let page: XAppPage;

  beforeEach(() => {
    page = new XAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
