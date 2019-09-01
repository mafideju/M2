import { Reduce } from './Reduce';
import { ReduceRecursive } from './Reduce';
import { expect as expectChai } from 'chai';

describe('REDUCE SESSIONS', () => {
  it('REDUCE SHOULD BE A FUNCTION', () => {
    expectChai(Reduce).to.be.a('function')
  });

  it('REDUCE SHOULD SUM ARGUMENTS', () => {
    expectChai(Reduce([1, 2, 3], (acc, item) => acc + item, 0)).to.be.equal(6);
  });

  it('REDUCE SHOULD SUM ARGUMENTS II', () => {
    expectChai(Reduce([1, 2, 3, 4], (acc, item) => acc + item, 0)).to.be.equal(10);
  });

  it('REDUCE SHOULD SUM ARGUMENTS WITHOUT INIT VALUE', () => {
    expectChai(Reduce([1, 2, 3, 4], (acc, item) => acc + item)).to.be.equal(10);
  });

  it('REDUCE SHOULD RETURN ANY KIND OF OPERATION', () => {
    expectChai(Reduce([1, 2], (acc, item) => { acc['number-' + item] = item; return acc }, {})).to.be.deep.equal({ 'number-1': 1, 'number-2': 2 });
  });

  it('REDUCE SHOULD INDEX', () => {
    expectChai(Reduce([1, 2, 3, 4], (acc, item, index) => acc + index, 0)).to.be.equal(6);
  });

  it('REDUCE SHOULD ARRAY', () => {
    expectChai(Reduce([1, 2, 3, 4], (acc, item, index, arr) => acc + arr[index], 0)).to.be.equal(10);
  });
});

describe('REDUCE SESSIONS', () => {
  it('REDUCE SHOULD BE A FUNCTION', () => {
    expectChai(ReduceRecursive).to.be.a('function')
  });

  it('REDUCE SHOULD SUM ARGUMENTS', () => {
    expectChai(ReduceRecursive([1, 2, 3], (acc, item) => acc + item, 0)).to.be.equal(6);
  });

  it('REDUCE SHOULD SUM ARGUMENTS II', () => {
    expectChai(ReduceRecursive([1, 2, 3, 4], (acc, item) => acc + item, 0)).to.be.equal(10);
  });

  it('REDUCE SHOULD SUM ARGUMENTS WITHOUT INIT VALUE', () => {
    expectChai(ReduceRecursive([1, 2, 3, 4], (acc, item) => acc + item)).to.be.equal(10);
  });

  it('REDUCE SHOULD RETURN ANY KIND OF OPERATION', () => {
    expectChai(ReduceRecursive([1, 2], (acc, item) => { acc['number-' + item] = item; return acc }, {})).to.be.deep.equal({ 'number-1': 1, 'number-2': 2 });
  });

  it('REDUCE SHOULD INDEX', () => {
    expectChai(ReduceRecursive([1, 2, 3, 4], (acc, item, index) => acc + index, 0)).to.be.equal(6);
  });

  it('REDUCE SHOULD ARRAY', () => {
    expectChai(ReduceRecursive([1, 2, 3, 4], (acc, item, index, arr) => acc + arr[index], 0)).to.be.equal(10);
  });
});