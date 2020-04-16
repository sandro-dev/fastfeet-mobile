import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ styles, ...rest }, ref) {
  return (
    <Container styles={styles}>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  styles: {},
};

export default forwardRef(Input);
