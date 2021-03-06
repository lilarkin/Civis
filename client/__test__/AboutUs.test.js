import React from 'react';
import AboutUs from '../components/AboutUs.js';
import renderer from 'react-test-renderer';

test('AboutUs Component is rendered', () => {
  const component = renderer.create(
      <AboutUs />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
