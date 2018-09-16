import { QuizHuntingPage } from './app.po';

describe('quiz-hunting App', () => {
  let page: QuizHuntingPage;

  beforeEach(() => {
    page = new QuizHuntingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
