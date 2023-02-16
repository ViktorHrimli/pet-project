export const theme = {
  colors: {
    black: '#111111',
    white: '#fff',
    text: '#111111',
    background: '#FDF7F2',
    gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
    muted: 'rgba(17, 17, 17, 0.6)',
    primary: '#F59256',
    secondary: '#3091EB',
    focus: '#FF6101',
    inputAuthForm: 'rgba(245, 146, 86, 0.5)',
    footerText: '#545454',
  },

  space: [
    '0px',
    '4px',
    '8px',
    '16px',
    '20px',
    '28px',
    '32px',
    '40px',
    '44px',
    '60px',
    '80px',
    '90px',
  ],

  fonts: {
    body: 'Manrope, sans-serif',
    special: 'Poppins, monospace',
    monospace: '',
  },

  fontSizes: {
    xxxs: '12px',
    xxs: '14px',
    xs: '16px',
    ms: '18px',
    s: '20px',
    m: '24px',
    l: '28px',
    xl: '36px',
    xxl: '48px',
    xxxl: '68px',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    min: 1.33,
    normal: 1.35,
    max: 1.375,
  },

  letterSpacings: {
    min: '-0.01em',
    normal: '0.04em',
    max: '0.07em',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  shadows: {
    normal: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    form: '7px 4px 14px rgba(0, 0, 0, 0.11)',
  },

  radii: {
    none: '0',
    normal: '20px',
    big: '40px',
    round: '50%',
    card: '0px 0px 40px 40px;',
  },

  screens: {
    xs: 319, // => no min-width
    mobil: 320,
    // => @media (min-width: 320px) { ... }

    tablet: 768,
    // => @media (min-width: 768px) { ... }

    desktop: 1280,
    // => @media (min-width: 1280px) { ... }
  },
};
