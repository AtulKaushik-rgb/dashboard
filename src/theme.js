import { createMuiTheme,responsiveFontSizes } from '@material-ui/core/styles';

let Theme = createMuiTheme({
  palette: {
    primary:{
        main:'#00D09C'
    },
    secondary:{
        main:'#F29682'
    },
    bluish:{
      main:'#5367FF'
    }

  },
  overrides: {
    Paper:{
      boxShadow:'rgba(0,0,0,0.1)'
    },
    MuiTabs: {
      indicator: {
        backgroundColor: 'primary'
      }
    },
    MuiTab: {
      root: {
        "&:hover": {
          backgroundColor: 'primary',
          color: 'primary'
        }
      },
      // selected: {
      //   backgroundColor: orange[100],
      //   color: orange[700],
      //   "&:hover": {
      //     backgroundColor: green[100],
      //     color: green[700]
      //   }
      // }
    }

  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeight: 600,
    textTransform: 'none',
    body1:{
      fontWeight:400,
    },
    body2:{
      fontWeight:400
    }
  },
});

Theme = responsiveFontSizes(Theme)

export default Theme;