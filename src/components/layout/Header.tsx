import React from 'react'
import LeftHeader from './Left-Header'
import RightHeader from './Right-Header'

export default function Header() {
  return (
    <div className="bg-white dark:bg-opacity-5 flex justify-between sticky top-0 items-center px-6 py-1">
      <LeftHeader />
      <RightHeader />
    </div>
  )
}
