import React from 'react'
import { sidebarNav } from '../../../data/nav'

function SidebarNavItem({ item }) {
    const {badge, icon: Icon, label } = item

    return (<li>
        <div className='flex items-center gap-3 w-full h-11  px-3 text-left text-sm font-medium'>
            <Icon className="size-4 shrink-0" />
         <span>{label}</span>
         {badge &&  <span className='ml-auto bg-[#f17a55] py-0 px-1.5  rounded-full text-white text-[11px] font-semibolt'>{badge}</span> }
        </div>
         </li> )


}


function SidebarNav() {
    return (
        <div>
            <u1 className='space-y-1'>
                
                {sidebarNav.map((item) => (< SidebarNavItem item={item} />))}
            
            </u1>
            

        </div>
    )
}

export default SidebarNav
