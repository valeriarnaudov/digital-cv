import React from 'react'

function WorkExpSingleInfo({doc}) {
  return (
    <>
        <p>{doc?.id}</p>
        <p>{doc?.from}</p>
        <p>{doc?.to}</p>
        <p>{doc?.occupation}</p>
        <p>{doc?.company}</p>
        <p>{doc?.description}</p>
      
    </>
  )
}

export default WorkExpSingleInfo
