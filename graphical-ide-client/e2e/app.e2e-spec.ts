import { GraphicalIdeClientPage } from './app.po';

describe('graphical-ide-client App', function() {
  let page: GraphicalIdeClientPage;

  beforeEach(() => {
    page = new GraphicalIdeClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
