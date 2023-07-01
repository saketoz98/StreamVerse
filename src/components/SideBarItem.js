import React from 'react'

const SideBarItem = ({sideBarItemName}) => {
  return (
    <div className='w-full hover:bg-slate-100 rounded-lg flex justify-center py-2 my-4'>
      <div className='font-semibold'>{sideBarItemName}</div>
    </div>
  )
}

export default SideBarItem
