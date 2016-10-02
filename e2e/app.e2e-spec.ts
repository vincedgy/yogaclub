import { YogaclubPage } from './app.po';

describe('yogaclub App', function() {
  let page: YogaclubPage;

  beforeEach(() => {
    page = new YogaclubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
