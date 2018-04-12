import {injectGlobal} from 'react-emotion';

export default () => {
  injectGlobal({
    a: {
      textDecoration: 'none',
      color: '#000',
    },
  });
};
