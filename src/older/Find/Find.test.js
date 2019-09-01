import { Find } from './Find';
import { expect as expectChai } from 'chai';

describe('REVERSE SESSIONS', () => {
  it('REVERSE SHOULD BE A FUNCTION', () => {
    expectChai(Find).to.be.a('function')
  });
});