import React, {Fragment, useState, useRef} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import { ITEM_TYPE } from '../data/types'
import { Window } from './Window'

export const Item = ({ item, id, order, style, findCard, moveItem, status }) => {
   const ref = useRef(null)


   const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(props, monitor) {
         if (!ref.current) {
            return
          }
          const dragId = props.id;
          const hoverId = id;

         if (dragId === hoverId) {
            return;
         }

          const dragOrder = props.order;
          const hoverOrder = order;

          const hoverBoundingRect = ref.current?.getBoundingClientRect()

          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

          const clientOffset = monitor.getClientOffset()

          const hoverClientY = clientOffset.y - hoverBoundingRect.top

          if (dragOrder < hoverOrder && hoverClientY < hoverMiddleY) {
            return;
          }
      
          if (dragOrder > hoverOrder && hoverClientY > hoverMiddleY) {
            return;
          }

          moveItem(dragId, hoverId)
       },
      })


    const [{ isDragging, handlerId}, drag] = useDrag(
      () => ({
        type: ITEM_TYPE,
        item: { id, order },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId()
        }),

      }),
      [id, findCard, moveItem],
    )

   const [show, setShow] = useState(false)

   const onOpen = () => setShow(true)
   const onClose = () => setShow(false)

   
   const opacity = isDragging ? 0 : 1;
   const zIndex = isDragging ?  2 : 1;
   
   drag(drop(ref))
   
   return (
      <Fragment>
         <div 
         ref={ref}
         data-handler-id={handlerId}
         style={{
            opacity,
            zIndex,
               position: 'absolute',
            ...style
         }}
         className="item"
         onClick={onOpen}
         >
            <div className='color-bar' style={{
               backgroundColor: status.color
            }} />

            <p className='item-title'>{item.content}</p>
            <p className='item-status'>{item.icon}</p>
         </div>
         <Window 
            item={item}
            onClose={onClose}
            show={show}
         />
      </Fragment>
      )
}