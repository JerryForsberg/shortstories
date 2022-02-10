import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              subtitle1: 'h2',
              subtitle2: 'h2',
              body1: 'span',
              body2: 'span',
            },
          },
        },
      },
  });

  export default theme;