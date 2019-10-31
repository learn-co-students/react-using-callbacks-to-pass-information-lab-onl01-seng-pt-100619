import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
// import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Matrix from '../src/Matrix'


describe('<Matrix />', () => {

  it("change me to true in test/matrix.test.js once your app is working!", () => {
    expect(false).to.equal(true)
  })

})
