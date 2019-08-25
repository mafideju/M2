import { Map } from './Map';
import { RecursiveMap } from './Map';
import { expect as expectChai } from 'chai';


describe('MAP SESSION', () => {
  it('MAP SHOULD BE A FUNCITON', () => {
    expectChai(Map).to.be.a('function')
  });

  it('MAP SHOULD RETURN GIVEN ARRAY', () => {
    expectChai(Map([1, 2], (item) => item)).to.be.deep.equal([1, 2]);
  });

  it('MAP SHOULD RETURN GIVEN ARRAY II', () => {
    expectChai(Map([3, 4], (item) => item)).to.be.deep.equal([3, 4]);
  });

  it('MAP SHOULD RETURN NEW SUMMED ARRAY', () => {
    expectChai(Map([2, 3], (item) => item + 1)).to.be.deep.equal([3, 4]);
  });

  it('MAP SHOULD RETURN ARRAY INDEX', () => {
    expectChai(Map([2, 3], (item, index) => index)).to.be.deep.equal([0, 1]);
  });

  it('MAP SHOULD RETURN ARRAY', () => {
    expectChai(Map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]]);
  });
})

describe('RECURSIVE MAP SESSION', () => {
  it('RecursiveMap SHOULD BE A FUNCITON', () => {
    expectChai(RecursiveMap).to.be.a('function')
  });

  it('RecursiveMap SHOULD RETURN GIVEN ARRAY', () => {
    expectChai(RecursiveMap([1, 2], (item) => item)).to.be.deep.equal([1, 2]);
  });

  it('RecursiveMap SHOULD RETURN GIVEN ARRAY II', () => {
    expectChai(RecursiveMap([3, 4], (item) => item)).to.be.deep.equal([3, 4]);
  });

  it('RecursiveMap SHOULD RETURN NEW SUMMED ARRAY', () => {
    expectChai(RecursiveMap([2, 3], (item) => item + 1)).to.be.deep.equal([3, 4]);
  });

  it('RecursiveMap SHOULD RETURN ARRAY INDEX', () => {
    expectChai(RecursiveMap([2, 3], (item, index) => index)).to.be.deep.equal([0, 1]);
  });

  it('RecursiveMap SHOULD RETURN ARRAY', () => {
    expectChai(RecursiveMap([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]]);
  });
});
