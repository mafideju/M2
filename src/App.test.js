import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const expectChai = require('chai').expect;
const sum = require('./Sum');


describe('GRUPO PADRÃO DE TESTES', () => {
  it('RENDERS WITHOUT CRASHING', () => {
    ReactDOM.render(<App />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });

  it('CONSOLE ASSERTION', () => {
    // eslint-disable-next-line no-self-compare
    console.assert(1 === 1, 'Numeros Iguais');
  });

  it('EXPECT DO JEST', () => {
    expect(2).toBe(2);
  });

  it('SUM SHOULD BE A FUNCTION', () => {
    expectChai(sum).to.be.a('function')
  });
});
