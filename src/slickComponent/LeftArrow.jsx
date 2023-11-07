import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LeftArrow = (props) => {
    const { className, style, onClick } = props;
  return (
<FontAwesomeIcon icon={faCircleLeft} onClick={onClick}/>
  )
}

export default LeftArrow
