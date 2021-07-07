// Test away!

import React from 'react';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('displays close if close true', () => {
  const controller = rtl.render(<Display closed={true} />);
  controller.getByText(/closed/i);
});
test('displays open if close false', () => {
  const controller = rtl.render(<Display closed={false} />);
  controller.getByText(/open/i);
});

test('displays unlocked if locked false', () => {
  const controller = rtl.render(<Display locked={false} />);
  controller.getByText(/unlocked/i);
});

test('displays locked if locked true', () => {
  const controller = rtl.render(<Display locked={true} />);
  controller.getByText(/locked/i);
});

test('red led class when locked or closed', () => {
  const controller = rtl.render(<Display locked={true} closed={true} />);
  const lock = controller.getByText(/locked/i);
  const closed = controller.getByText(/closed/i);

  expect(lock.classList.contains('red-led')).toBe(true);
  expect(closed.classList.contains('red-led')).toBe(true);
});

test('green led class when unlocked or open', () => {
  const controller = rtl.render(<Display locked={false} closed={false} />);
  const lock = controller.getByText(/unlocked/i);
  const open = controller.getByText(/open/i);

  expect(lock.classList.contains('green-led')).toBe(true);
  expect(open.classList.contains('green-led')).toBe(true);
});
