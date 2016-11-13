import test from 'tape';
import {registry, __RewireAPI__ as registry__} from '../src/registry';

class TestComponent {
  static id() {
    return 'TestComponent';
  }
}

test('registry module', (t) => {
  registry__.__Rewire__('constructComponent', () => new TestComponent());
  let fakeStore = {};
  registry__.__Rewire__('store', fakeStore);

  registry.attach('contextSelector', TestComponent);

  t.ok(fakeStore[TestComponent.id()].length === 1, 'be able to attach component');
  t.end();
});

