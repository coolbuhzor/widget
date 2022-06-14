import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import Input from '../components/Input';

let obj = null;

describe('<Widget />', () => {
  beforeEach(() => {
    obj = document.createElement('div');
    document.body.appendChild(obj);
  });

  afterEach(() => {
    unmountComponentAtNode(obj);
    obj.remove();
    obj = null;
  });

  it('renders without crashing', () => {
    render(<Input element={obj} />, obj);
  });
});
