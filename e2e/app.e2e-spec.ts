import { PhiloAppPage } from './app.po';

describe('philo-app App', () => {
  let page: PhiloAppPage;

  beforeEach(() => {
    page = new PhiloAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
