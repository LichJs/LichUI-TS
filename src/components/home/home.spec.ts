import { expect } from 'chai';
import { assert, spy } from 'sinon';
import { HomeComponent } from './home';
import { ComponentTest } from '../../util/component-test';

let loggerSpy = spy();

describe('Home component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><home></home></div>', { 'home': HomeComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      const mode = process.env.ENV;
      const modeEl = vm.$el.querySelector('.mode');
      const packageEl = vm.$el.querySelector('.package');
      if (!modeEl) {
        assert.calledWith(loggerSpy, 'can\'t find mode element');
      } else {
        expect(modeEl.textContent).to.equal(`${mode} mode`);
      }

      if (!packageEl) {
        assert.calledWith(loggerSpy, 'can\'t find package element');
      } else {
        expect(packageEl.textContent).to.equal(`${mode} mode`);
      }
    });
  });
});
