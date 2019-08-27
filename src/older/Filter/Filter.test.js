import { Filter } from './Filter';
import { RecursiveFilter } from './Filter';
import { expect as expectChai } from 'chai';

describe('FILTER TESTING', () => {
  it('FILTER BASIC', () => {
    expectChai(Filter).to.be.a('function')
  });

  it('RECEIVES AN ARRAY', () => {
    expectChai(Filter([1, 2], (item) => item)).to.be.deep.equal([1, 2]);
  });

  it('RECEIVES AN ARRAY II', () => {
    expectChai(Filter([2, 3], (item) => item)).to.be.deep.equal([2, 3]);
  });

  it('RECEIVES AN ARRAY AND FILTER DUE A CERTAIN CONDITION', () => {
    expectChai(Filter([1, 2, 3], (item) => item < 2)).to.be.deep.equal([1]);
  });

  it('RECEIVES AN ARRAY AND FILTER IT WITH INDEX', () => {
    expectChai(Filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3]);
  });
  
  it('RECEIVES AN ARRAY, FILTER, RETURN IT BACK WITH INDEX', () => {
    expectChai(Filter([1, 2], (item, index, array) => array)).to.be.deep.equal([1, 2]);
  });

  it('RECEIVES AN ARRAY, FILTER, RETURN IT BACK DACIUK WAY', () => {
    expectChai(Filter([1, 2, 3, 4, 1, 2, 3, 5], (item, index, array) => index === array.indexOf(item))).to.be.deep.equal([1, 2, 3, 4, 5]);
  });
});

describe('RECURSIVE FILTER SESSION', () => {
  it('RECURSIVE FILTER SHOULD BE A FUNCITON', () => {
    expectChai(RecursiveFilter).to.be.a('function')
  });

  it('RECURSIVE FILTER SHOULD RETURN GIVEN ARRAY', () => {
    expectChai(RecursiveFilter([1, 2], (item) => item)).to.be.deep.equal([1, 2]);
  });

  it('RECURSIVE FILTER SHOULD RETURN GIVEN ARRAY II', () => {
    expectChai(RecursiveFilter([3, 4], (item) => item)).to.be.deep.equal([3, 4]);
  });

  it('RECURSIVE FILTER SHOULD RETURN NEW SUMMED ARRAY', () => {
    expectChai(RecursiveFilter([2, 3], (item) => item + 1)).to.be.deep.equal([3, 4]);
  });

  it('RECURSIVE FILTER SHOULD RETURN ARRAY INDEX', () => {
    expectChai(RecursiveFilter([2, 3], (item, index) => index)).to.be.deep.equal([0, 1]);
  });

  it('RECURSIVE FILTER SHOULD RETURN ARRAY', () => {
    expectChai(RecursiveFilter([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]]);
  });
});
