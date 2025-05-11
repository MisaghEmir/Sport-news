import React from 'react'
import LeftHeader from './Left-Header'
import RightHeader from './Right-Header'

export default function Header() {
  return (
    <div className="  flex justify-between items-center px-5">
      <LeftHeader />
      <RightHeader />
    </div>
  )
}
