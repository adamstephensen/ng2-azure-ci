import { SswNgCliCiPage } from './app.po';

describe('ssw-ng-cli-ci App', function() {
  let page: SswNgCliCiPage;

  beforeEach(() => {
    page = new SswNgCliCiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
