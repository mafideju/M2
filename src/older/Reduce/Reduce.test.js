import { Reduce } from './Reduce';
import { expect as expectChai } from 'chai';

describe('REVERSE SESSIONS', () => {
  it('REVERSE SHOULD BE A FUNCTION', () => {
    expectChai(Reduce).to.be.a('function')
  });
});