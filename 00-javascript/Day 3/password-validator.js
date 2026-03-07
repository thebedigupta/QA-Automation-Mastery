'use strict';

const minLength = (min = (password) => ({
  value: password.length >= min,
  message: `Password must be at least ${min} characters long`,
}));

const hasupperCase = () => (password) => ({
  value: /[A-Z]/.test(password),
  message: 'It must contain captial letter',
});

const haslowerCase = () => (password) => ({
  value: /[a-z]/.test(password),
  message: 'Password must contain at least small letters',
});

const hasNumber = () => (password) => ({
  valid: /\d/.test(password),
  message: 'Password must contain at least one number',
});
const hasspecialCharacter =
  (chars = '!@#&%') =>
  (password) => ({
    value: new RegExp(`[${chars}]`).test(password),
    message: `Your Password doesn't have any special character`,
  });
const noSpaces = () => (password) => ({
  value: !/\s/.test(password),
  message: `Your Password doesn't contain any spaces`,
});
