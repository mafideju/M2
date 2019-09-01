import { ReduceRight } from './ReduceRight';
import { expect as expectChai } from 'chai';

describe('REVERSE SESSIONS', () => {
  it('REVERSE SHOULD BE A FUNCTION', () => {
    expectChai(ReduceRight).to.be.a('function')
  });
});