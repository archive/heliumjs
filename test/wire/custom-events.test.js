import test from 'tape';
import {wireCustomEvents} from '../src/wire/custom-events';

test('custom events module', (t) => {
  let fakeComponent = {
    defaults: () => {

    }
  };

  wireCustomEvents(fakeComponent);

  t.notOk(fakeComponent.defaults.events, 'asdasd');
  t.end();
});

