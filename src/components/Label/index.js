import React from 'react';
import PropTypes from 'prop-types';
import { LabelContainer } from './styles';

const Label = ({ Text }) => (
  <LabelContainer>
    {Text}
  </LabelContainer>
);

Label.propTypes = {
  Text: PropTypes.string,
};

export default Label;
