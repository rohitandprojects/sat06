"use client";
import React from 'react'

const Loading = () => {
  return (
    <div className="loader-main position-fixed w-100"><div className="loader-bar start w-100"><div class="loader-line1 position-absolute"></div><div class="loader-line2 position-absolute"></div></div></div>
    // <div className='vw-100 vh-100 d-flex align-items-center justify-content-center page-loading'><h3>... loading ...</h3></div>
  )
}

export default Loading