import { Reverse } from './Reverse';
import { ReverseRecursive } from './Reverse';
import { expect as expectChai } from 'chai';

describe('REVERSE SESSIONS', () => {
  it('REVERSE SHOULD BE A FUNCTION', () => {
    expectChai(Reverse).to.be.a('function')
  });

  it('ITEM SHOULD RETURN ITEM', () => {
    expectChai(Reverse([1])).to.be.deep.equal([1]);
  });

  it('ITEM SHOULD RETURN BACKWARDS ITEM', () => {
    expectChai(Reverse([1, 2])).to.be.deep.equal([2, 1]);
  });
});

describe('REVERSE RECURSIVE SESSIONS', () => {
  it('REVERSE RECURSIVE SHOULD BE A FUNCTION', () => {
    expectChai(ReverseRecursive).to.be.a('function')
  });

  it('ITEM SHOULD RETURN ITEM', () => {
    expectChai(ReverseRecursive([1])).to.be.deep.equal([1]);
  });

  it('ITEM SHOULD RETURN BACKWARDS ITEM', () => {
    expectChai(ReverseRecursive([1, 2])).to.be.deep.equal([2, 1]);
  });
});