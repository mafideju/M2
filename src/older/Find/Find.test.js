import { Find } from './Find';
import { FindRecursive } from './Find';
import { expect as expectChai } from 'chai';

describe('FIND SESSIONS', () => {
  it('FIND SHOULD BE A FUNCTION', () => {
    expectChai(Find).to.be.a('function')
  });

  it('FIND SHOULD RETURN ONE', () => {
    expectChai(Find([1, 2, 3], (item) => item === 1)).to.be.equal(1)
  });

  it('FIND SHOULD RETURN THREE', () => {
    expectChai(Find([1, 2, 3], (item) => item === 3)).to.be.equal(3)
  });

  it('FIND SHOULD INDEX', () => {
    expectChai(Find([1, 2, 3], (item, index) => index === 0)).to.be.equal(1)
  });

  it('FIND SHOULD ARRAY', () => {
    expectChai(Find([1, 2, 3], (item, index, array) => array[index] === 1)).to.be.equal(1)
  });

  it('FIND RECURSIVE SHOULD UNDEFINED', () => {
    expectChai(Find([], (item) => item)).to.be.equal(undefined)
  });
});

describe('FIND RECURSIVE SESSIONS', () => {
  it('FIND RECURSIVE SHOULD BE A FUNCTION', () => {
    expectChai(FindRecursive).to.be.a('function')
  });

  it('FIND RECURSIVE SHOULD RETURN ONE', () => {
    expectChai(FindRecursive([1, 2, 3], (item) => item === 1)).to.be.equal(1)
  });

  it('FIND RECURSIVE SHOULD RETURN THREE', () => {
    expectChai(FindRecursive([1, 2, 3], (item) => item === 3)).to.be.equal(3)
  });

  it('FIND RECURSIVE SHOULD INDEX', () => {
    expectChai(FindRecursive([1, 2, 3], (item, index) => index === 0)).to.be.equal(1)
  });

  it('FIND RECURSIVE SHOULD ARRAY', () => {
    expectChai(FindRecursive([1, 2, 3], (item, index, array) => array[index] === 1)).to.be.equal(1)
  });

  it('FIND RECURSIVE SHOULD UNDEFINED', () => {
    expectChai(FindRecursive([], (item) => item)).to.be.equal(undefined)
  });
});