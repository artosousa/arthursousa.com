import {injectGlobal} from 'react-emotion';

export default () => {
  injectGlobal({
    a: {
      textDecoration: 'inherit',
      color: 'inherit',
    },
  });
};
