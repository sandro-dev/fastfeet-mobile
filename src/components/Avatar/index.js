import React from 'react';
import PropTypes from 'prop-types';
import { sample } from 'lodash';

import { Container, Image, Icon, Text } from './styles';
// import Text from '~/components/Text';

export default function Avatar({ isPhoto, style, fullname, url }) {
  if (isPhoto) {
    return <Image source={{ uri: url }} style={style} />;
  }

  const pallete = [
    { bgcolor: '#F4EFFC', color: '#A28FD0' },
    { bgcolor: '#FCF4EE', color: '#CB946C' },
    { bgcolor: '#EBFBFA', color: '#83CEC9' },
    { bgcolor: '#FFEEF1', color: '#CC7584' },
    { bgcolor: '#F4F9EF', color: '#A8D080' },
    { bgcolor: '#FCFCEF', color: '#CCCC8B' },
  ];

  const select = sample(pallete);

  const name = fullname?.split(' ');
  const fname = name.shift();
  const lname = name.pop();
  const initials = fname?.split('').shift() + lname?.split('').shift();

  return (
    <Container bgcolor={select.bgcolor} style={style}>
      <Icon>
        {fullname ? (
          <Text color={select.color} style={style}>
            {initials}
          </Text>
        ) : null}
      </Icon>
    </Container>
  );
}

Avatar.propTypes = {
  fullname: PropTypes.string,
  isPhoto: PropTypes.bool,
  url: PropTypes.string,
};

Avatar.defaultProps = {
  fullname: '',
  isPhoto: false,
  url: '',
};
