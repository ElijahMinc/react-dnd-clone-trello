import React from 'react'

export const Col = ({isOver, children}) => {
   const className = isOver ? "highlight-region" : ''
   return (
      <div >
         {children}
      </div>
      )
}