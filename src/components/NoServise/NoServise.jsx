import PropTypes from 'prop-types';

import { Box } from './NoServise.styled';

export const NoServise = ({ message }) => {
  return (
    <>
      <Box>{message}</Box>
    </>
  );
};

NoServise.propTypes = {
  message: PropTypes.node,
};
