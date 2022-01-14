import React, { useState } from 'react'
import { Input, Layout, Button, Table, Space } from 'antd';
import './dashboard.css'
import { useHistory } from 'react-router-dom';
import Additem from '../Additem/Additem';
export default function Dashboard() {
  const { Header, Content, Footer } = Layout;
  const { Search } = Input;
  const [searchText, setSearchText] = useState("")

  const [filterArray, setFilterArray] = useState([])
  const [user, setUser] = useState([
    {
      key: '1',
      name: 'Amul',
      price: 560,


    },
    {
      key: '2',
      name: 'Rice',
      price: 450,

    },
    {
      key: '3',
      name: 'Durga Ghee ',
      price: 745,

    },
    {
      key: '4',
      name: 'Sprite ',
      price: 92,

    },
    {
      key: '5',
      name: 'Butter ',
      price: 175,

    },
    {
      key: '6',
      name: 'Cadburry  ',
      price: 285,

    },
  ])
  const history = useHistory();
  const onLogOut = () => {
    history.push("/Login")
  }
  const onDelete = (index) => {
    let arr = [...user]
    const newarr = arr.splice(index, 1)
    console.log(arr)
    setUser(arr)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
    },


    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          <Button onClick={() => { onDelete(index) }}>Delete</Button>
        </Space>
      ),
    },
  ];

  const onSearchChange = (name) => {
    const arr = [...user]
    const newArr = arr.filter(ele => name.toLowerCase() === ele.name.toLowerCase())
    console.log(newArr)
    setSearchText(name)
    setFilterArray(newArr)
  }

  return (
    <div style={{ height: '100%' }}>
      <Layout className="layout">
        <div>
          <Header>
            <div />
            <div className='dashboard' >
              <h1 style={{ color: 'white' }}>Welcome</h1>
              <Button className='dashboard' onClick={onLogOut} >Logout</Button>

            </div>
          </Header>
        </div>
        <div style={{ height: '100%' }}>

          <Content style={{ padding: '25px 50px' }}>
            <div className="site-layout-content">
              <div>
                <Additem  />
              </div>
              <Search placeholder="Search by name" onSearch={onSearchChange} enterButton />
              <div>
                <Table columns={columns} dataSource={searchText?filterArray: user} />
              </div>
            </div>
          </Content>
        </div>

        <Footer style={{ textAlign: 'center' }}> Design ©2022</Footer>
      </Layout>,


    </div>
  );
}
