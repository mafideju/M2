import { expect as expectChai } from 'chai';
import { Every } from './Every';
import { RecursiveEvery } from './Every';

describe('EVERY SESSION', () => {
  it('EVERY DEVE SER UMA FUNÇÃO', () => {
    expectChai(RecursiveEvery).to.be.a('function')
  });

  it('SHOULD RETURN TRUE FOR AN EMPTY ARRAY', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(RecursiveEvery([], (item) => item)).to.be.ok;
  });

  it('SHOULD RETURN FALSE FOR A GIVEN ARRAY', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(RecursiveEvery([0, 2, 3], (item) => item)).to.be.false;
  });

  it('SHOULD RETURN TRUE FOR A GIVEN ARRAY', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(RecursiveEvery([1, 2, 3], (item) => item)).to.be.ok;
  });

  it('SHOULD RETURN TRUE FOR A GIVEN ARRAY WITH INDEX', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(RecursiveEvery([1, 2, 3], (item, index) => item === index + 1)).to.be.ok;
  });

  it('SHOULD RETURN THE GIVEN ARRAY ITSELF', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(RecursiveEvery([1, 2, 3, 4], (item, index, array) => array.length === 4)).to.be.ok;
  });
});


describe('RECURSIVE EVERY SESSION', () => {
  it('RECURSIVE EVERY DEVE SER UMA FUNÇÃO', () => {
    expectChai(RecursiveEvery).to.be.a('function')
  });

  it('SHOULD RETURN TRUE FOR AN EMPTY ARRAY', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(Every([], (item) => item)).to.be.ok;
  });

  it('SHOULD RETURN FALSE FOR A GIVEN ARRAY', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(Every([0, 2, 3], (item) => item)).to.be.false;
  });

  it('SHOULD RETURN TRUE FOR A GIVEN ARRAY', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(Every([1, 2, 3], (item) => item)).to.be.ok;
  });

  it('SHOULD RETURN TRUE FOR A GIVEN ARRAY WITH INDEX', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(Every([1, 2, 3], (item, index) => item === index + 1)).to.be.ok;
  });

  it('SHOULD RETURN THE GIVEN ARRAY ITSELF', () => {
    // eslint-disable-next-line no-unused-expressions
    expectChai(Every([1, 2, 3, 4], (item, index, array) => array.length === 4)).to.be.ok;
  });
});