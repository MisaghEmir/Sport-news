import React from 'react'

const TitrLabel = ({label}:{label:string}) => {
  return (
    <div className='flex'>
      <div className='border-b-[3px] border-theme_border_100 font-bold  py-1' style={{borderBottomWidth: "3px"}}>
        {label}
        </div>
      <div className='flex-1' style={{borderBottomWidth: "2px"}}></div>
    </div>
  )
}

export default TitrLabel;
