module.exports = {
  config: {
    fontSize: 12,

    fontFamily: '"Fira Mono", monospace',

    cursorColor: '#A6A6A6',

    cursorShape: 'UNDERLINE',

    foregroundColor: '#A6A6A6',

    backgroundColor: '#2E3235',

    borderColor: '#40464A',

    css: '',

    termCSS: '',

    showHamburgerMenu: '',

    showWindowControls: '',

    padding: '8px 8px',

    colors: {
      black: '#A6A6A6',
      lightBlack: '#A6A6A6',
      white: '#2E3235',
      lightWhite: '#2E3235',
      red: '#8470AE',
      lightRed: '#8470AE',
      green: '#589DAA',
      lightGreen: '#589DAA',
      blue: '#5E86A9',
      lightBlue: '#5E86A9',
      yellow: '#B3A879',
      lightYellow: '#B3A879',
      magenta: '#B47F42',
      lightMagenta: '#B47F42',
      cyan: '#589DAA',
      lightCyan: '#589DAA'
    },

    shell: '/usr/local/bin/fish',

    shellArgs: ['--login'],

    env: {},

    bell: 'SOUND',

    copyOnSelect: false,

    hyperStatusLine: {
      dirtyColor: '#40464A',
      aheadColor: '#804A9B',
    }
  },

  plugins: [
    'hyper-statusline',
    'hyperterm-tabs',
    'hyper-search',
  ],

  localPlugins: []
};
