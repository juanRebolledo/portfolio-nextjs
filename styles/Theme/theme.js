const light = {
  bg: {
    black: '#000000',
    primary: '#F2E9E4',
    orange: '#FFA238',
  },
  color: {
    primary: '#272822',
    secondary: '#2E2E2E',
    third: 'rgba(17, 17, 17, 0.75)',
  },
}

const dark = {
  bg: {
    black: '#000000',
    primary: '#121212',
    orange: '#FFA238',
  },
  color: {
    primary: '#F2E9E4',
    secondary: '#FFFFFF',
    third: '#FFA238'
  },
  // ...
}

const defaultTheme = {
  fontSizes: {
    links: "1.25em",
  },
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  }
  // ...
};

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }