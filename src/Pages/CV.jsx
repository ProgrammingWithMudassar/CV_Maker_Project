import React from 'react'
import { CV1 } from './CVs/index.js'
import { useParams } from 'react-router-dom'

const CV = () => {
  const { id } = useParams();

  let componentToRender = null;

  if (id === 'health') {
    componentToRender = <CV1 />;
  } 
  else if (id === 'IT') {
    componentToRender = <CV1 />;
  }
  else if (id === 'business') {
    componentToRender = <CV1 />;
  }
  else if (id === 'managment') {
    componentToRender = <CV1 />;
  }



  return <div>{componentToRender}</div>;
}

export default CV