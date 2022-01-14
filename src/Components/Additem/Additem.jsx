import React, { useState } from 'react';
import { Modal, Button } from 'antd';
export default function Additem(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [user, setUser] = useState({})

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        props.onAdd()
        setIsModalVisible(false);
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
                    <input className='inp' type="text" placeholder='Enter item Name' required />
                </div>
                <div>
                    <label >Price</label>
                    <input className='inp' type="number" placeholder='Enter Price' required />
                </div>
            </Modal>
        </div>
    )
}
