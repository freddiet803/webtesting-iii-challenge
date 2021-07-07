// Test away
import React from 'react';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('dashboard renders correctly', () => {
  const dash = rtl.render(<Dashboard />);
  expect(dash).toMatchSnapshot();
});

test('defaults to unlocked and open', () => {
  const dash = rtl.render(<Dashboard />);
  dash.getByText(/unlocked/i);
  dash.getByText(/open/i);
});

test('cant open/close if locked', () => {
  const dash = rtl.render(<Dashboard />);
  const openButton = dash.getByTestId(/openclose/i);
  const lockButton = dash.getByTestId(/lockunlock/i);

  rtl.act(() => {
    rtl.fireEvent.click(openButton);
  });
  rtl.act(() => {
    rtl.fireEvent.click(lockButton);
  });

  expect(openButton).not.toBeEnabled();
});
