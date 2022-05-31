import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'

import { fetchGreetings } from '../store/greetings';

const Greeting = props => {
  const [greetingMessage, setGreetingMessage] = useState('Greeing loading...');
  const {message} = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (greetingMessage === 'Greeing loading...') dispatch(fetchGreetings())
    setGreetingMessage(message)
  }, [message])

  return (
    <>
      <p>Fetch randomly generated greeting messages by refreshing the page.</p>
      <h1>{greetingMessage?.greeting}</h1>
    </>
  )
}

Greeting.propTypes = {}

export default Greeting