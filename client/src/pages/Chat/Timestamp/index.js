import moment from 'moment';
import PropTypes from "prop-types";
import React from 'react';
import { CurrentTime } from './styles';

export default function Timestamp ({ message }) {

  const getTime = message => {
    const { timeStamp } = message;
    const format = "hh:mm A";
    return moment(timeStamp).format(format);
  };

  return (
    <CurrentTime>
      { getTime(message) }
    </CurrentTime>
  );
}

Timestamp.propTypes = {
  message: PropTypes.shape({
    timeStamp: PropTypes.string
  })
};
