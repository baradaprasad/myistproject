import React, { useState } from 'react';
import { Modal, Button } from 'antd';
export default function Additem(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [item, setItem] = useState({ name: "", price: "" })
    const onChangeName = (event) => {
        setItem(prv => {
            return {
                ...prv, name: event.target.value
            }
        })
    }
    const onChangePrice = (event) => {
        setItem(prv => {
            return {
                ...prv, price: event.target.value
            }
        })
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if (!item.name.trim() || !item.price.trim()) {
            alert('Please Enter Item Name and Price Correctly')
            return;
        }
        props.onAdd(item)
        setIsModalVisible(false);
        console.log(item)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                ADD
            </Button>
            <Modal title="Add Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <label >Name</label>
                    <input className='inp' type="text" placeholder='Enter item Name' onChange={onChangeName}
                        value={item.name} required />
                </div>
                <div>
                    <label >Price</label>
                    <input className='inp' type="number" placeholder='Enter Price' onChange={onChangePrice}
                        value={item.price} required />
                </div>
            </Modal>
        </div>
    )
}
