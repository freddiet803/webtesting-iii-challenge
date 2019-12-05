// Test away!

import React from 'react';
import Controls from './Controls';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('open button disabled if locked', () => {
  const controls = rtl.render(<Controls locked={true} closed={true} />);
  const openButton = controls.getByTestId(/openclose/i);
  expect(openButton).not.toBeEnabled();
});

test('lock is disabled if gate open', () => {
  const controls = rtl.render(<Controls locked={false} closed={false} />);
  const lockButton = controls.getByTestId(/lockunlock/i);
  expect(lockButton).not.toBeEnabled();
});

test('button text changes', () => {
  const controls = rtl.render(<Controls locked={true} closed={true} />);
  controls.getByText(/unlock gate/i);
  controls.getByText(/open gate/i);

  const lockButton = controls.getByTestId(/lockunlock/i);

  rtl.act(() => {
    rtl.fireEvent.click(lockButton);
  });
  controls.getByText(/lock gate/i);
});

test('button more changes', async () => {
  const controls = rtl.render(<Controls locked={false} closed={true} />);
  controls.getByText(/lock gate/i);
  controls.getByText(/open gate/i);

  const openButton = controls.getByTestId(/openclose/i);

  rtl.act(() => {
    rtl.fireEvent.click(openButton);
  });

  controls.getByText(/open gate/i);
});
