import React, { useState } from "react";
import { Col } from "../components/Col";
import { DropWrapper } from "../components/DropWrapper";
import { Motion, spring } from 'react-motion';
import { Item } from "../components/Item";
import {data, statuses} from '../data'
import FlipMove from 'react-flip-move';
import {Draggable} from 'react-beautiful-dnd' 

import update from 'immutability-helper'

const Homepage = props => {
    const [items, setItems] = useState(data)
    console.log('items', items)
    const findCard = (id) => {
        const card = items.find(item => item.id === id)

        return {
            card,
            index: items.indexOf(card)
        }
    }

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status)
        const { card, index } = findCard(item.id);

        const updatedItems =  update(items, {
            $splice: [
              [index, 1],
              [index, 0, {...card, status, icon: mapping.icon}]
            ],
          })

        setItems(updatedItems.map((item, idx) => ({...item, order: idx})))
    }

    const moveItem = (id, atIndex) => {

        const { card, index } = findCard(id);
        const updatedItems=  update(items, {
            $splice: [
              [index, 1],
              [atIndex, 0, card],

            ],
            
          })

        setItems(updatedItems.map((item, idx) => ({...item, order: idx})))
    }

    return (
        <div className="row-grid">
            {statuses.map((s) => (
                <div key={s.status} className="col-wrapper">
                    <h2 className="col-header">{s.status.toUpperCase()}</h2>
                    <DropWrapper onDrop={onDrop} status={s.status}>
                        <Col >
                            {items
                                .filter(i => i.status === s.status)
                                .sort((a,b) => a.order - b.order)
                                .map((i, idx) => (
                                <Item key={i.id} item={i} index={idx} id={i.id} findCard={findCard} moveItem={moveItem} status={s}/>
                            ))}
                           
                        </Col>
                    </DropWrapper>
                </div>
            ))}
        </div>
    );
};

export default Homepage;