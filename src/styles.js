import {injectGlobal} from 'react-emotion';

export default () => {
  injectGlobal({
    a: {
      textDecoration: 'underline',
      color: 'inherit',
    },
  });
};
