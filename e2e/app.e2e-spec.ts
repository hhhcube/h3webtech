import { H3webtechPage } from './app.po';

describe('h3webtech App', () => {
  let page: H3webtechPage;

  beforeEach(() => {
    page = new H3webtechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
