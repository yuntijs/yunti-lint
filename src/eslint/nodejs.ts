import { eslint } from './';

export const eslintNodejs = {
  ...eslint,
  rules: {
    ...eslint.rules,
    'unicorn/prefer-node-protocol': 'warn',
  },
};
