import React from 'react';
import PropTypes from 'prop-types';

const Idea = ({ id }) => (
  <h1>
    This is the idea
    {' '}
    {id}
  </h1>
);

Idea.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Idea;
