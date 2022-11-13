export const $rules = {
  start: [
    {
      regex: /KEYWORD/,
      token: 'keyword',
      next: 'otherRulesBlock',
    },
    { defaultToken: 'text' },
  ],
  otherRulesBlock: [
    {
      regex: /^ \+/,
      token: 'keyword',
      next: 'otherRulesBlock',
    },
    // { ... }
  ],
};