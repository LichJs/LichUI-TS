import { spy, assert } from 'sinon';
import { expect } from 'chai';
import Component from 'vue-class-component';
import { ComponentTest, MockLogger } from '../../util/component-test';
import { AboutComponent } from './about';

let loggerSpy = spy();

@Component({
  template: require('./about.html')
})
class MockAboutComponent extends AboutComponent {
  constructor () {
    super();
    this.logger = new MockLogger(loggerSpy);
  }
}

describe('About component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><about></about></div>', { 'about': MockAboutComponent });
  });

  it('should render correct contents', async () => {
    debugger;
    directiveTest.createComponent();

    await directiveTest.execute((vm) => {
      const repoEl = vm.$el.querySelector('.repo-link');
      if (!repoEl) {
        assert.calledWith(loggerSpy, 'can\'t find repo-link element.');
      } else {
        expect(
          repoEl.getAttribute('href')
        ).to.equal('https://github.com/ducksoupdev/vue-webpack-typescript');
        assert.calledWith(loggerSpy, 'about is ready!');
      }
    });
  });
});
