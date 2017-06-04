import { Angular2BattleShipPage } from './app.po';

describe('angular2-battle-ship App', function() {
  let page: Angular2BattleShipPage;

  beforeEach(() => {
    page = new Angular2BattleShipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
