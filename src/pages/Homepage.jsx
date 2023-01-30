import React, { useState } from "react";
import { Col } from "../components/Col";
import { DropWrapper } from "../components/DropWrapper";
import { Item } from "../components/Item";
import {data, statuses} from '../data'
import { Motion, spring } from 'react-motion';

import update from 'immutability-helper'

const Homepage = props => {
    const [items, setItems] = useState(data)

    const findCard = (id) => {
        const card = items.find(item => item.id === id)

        return {
            card,
            index: items.indexOf(card)
        }
    }

   const moveItem = (dragId, hoverId) => {
        const dragIndex = items.findIndex((el) => el.id === dragId);
        const hoverIndex = items.findIndex((el) => el.id === hoverId);

        const dragCardOrder = items[dragIndex].order;
        const hoverCardOrder = items[hoverIndex].order;

        setItems(
            update(items, {
                [dragIndex]: { order: { $set: hoverCardOrder } },
                [hoverIndex]: { order: { $set: dragCardOrder } } 
            })
        );
    }

    return (
        <div style={{
            position: "relative",
            width: "250px",
            margin: '0 auto'
        }}>
        
            {items
                .map((i, idx) => (
                    <Motion
                    key={idx}
                    style={{
                        y: spring(i.order * 150, { stiffness: 600, damping:53 })
                      }}
                  >
                    {({ y, }) =>  (
                            <Item 
                            item={i} 
                            index={idx} 
                            order={i.order}
                            id={i.id} 
                            style={{
                                transform: 'translate3d(0, ' + y + 'px, 0)',
                            }} 
                            findCard={findCard} 
                            moveItem={moveItem}
                            status={i.status}
                        />
                        )
                     }
                  </Motion>
            ))}
           
        </div>
    );
};

export default Homepage;