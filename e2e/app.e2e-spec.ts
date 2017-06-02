import { MinesweeperPage } from './app.po';

describe('minesweeper App', () => {
  let page: MinesweeperPage;

  beforeEach(() => {
    page = new MinesweeperPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
