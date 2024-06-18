import React, { useState,useEffect } from 'react';
import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Input, Form, Modal, Select, message, Table, Space } from 'antd';
import axios from 'axios';
const mongoose = require('mongoose');
const { Header } = Layout;

const Home = () => {
    const dummyData = [
        { name: 'John Doe', standard: 3, current_division: 'A', attendance: 85, monthly_score: 92, quarter_scorenum: 78, quarter_scorelit: 85 },
        { name: 'Jane Smith', standard: 5, current_division: 'B', attendance: 90, monthly_score: 88, quarter_scorenum: 82, quarter_scorelit: 79 },
        { name: 'Michael Johnson', standard: 2, current_division: 'C', attendance: 95, monthly_score: 85, quarter_scorenum: 76, quarter_scorelit: 80 },
        { name: 'Emily Wilson', standard: 4, current_division: 'D', attendance: 92, monthly_score: 90, quarter_scorenum: 84, quarter_scorelit: 88 },
        { name: 'David Brown', standard: 1, current_division: 'A', attendance: 88, monthly_score: 78, quarter_scorenum: 72, quarter_scorelit: 75 }
      ];
    const [students, setStudents] = useState(dummyData);
    const [loading, setLoading] = useState(false);
  
    const getAllStudents = async () => {
        setLoading(true);
        try {
          const fellowid = JSON.parse(localStorage.getItem('userId'));
          console.log('Fellow ID:', fellowid);
          if (!fellowid) {
            message.error('Fellow ID is required to get students');
            setLoading(false);                                          
            return;
          }
// mai bhi bahot boltaa huu and hence its always good tto have it become hackathon mai naa team mates or khana
          const response = await axios.post('http://localhost:8000/api/v1/student/get-allStudents', { fellowid });
          const arr = response.data.students;
          const filteredArr = arr.map(student => {
            return {
                name: student.name,
                standard: student.standard,
                current_division: student.current_division,
                attendance: student.attendance,
                monthly_score: student.monthly_score,
                quarter_scorenum: student.quarter_scorenum,
                quarter_scorelit: student.quarter_scorelit
            };
        });
        setStudents(filteredArr);
          if (response.data.success) {
         //   setStudents(response.data.students);
            message.success('Students fetched successfully');
          } else {
            message.error(response.data.message || 'Failed to fetch students');
          }
        } catch (error) {
          console.error('Error fetching students:', error);
          message.error('An error occurred during fetching students');
        } finally {
          setLoading(false);
        }
      };
      
      useEffect(() => {
        getAllStudents();
      }, []);
      
  const [create, setCreate] = useState(false);
  const [student, setStudent] = useState(false);
  const [modal, setModal] = useState(false);
  const [name,setName] = useState('');
  const [standard,setStandard] = useState('');
  const [rollnum,setRollnum] = useState('');
  const [editable, setEditable] = useState(null);
  // handle add user
  const handleAddUser = async (values) => {
   // console.log(values);
    try {
        const fellow = JSON.parse(localStorage.getItem('userId'));
        if (!fellow) {
            message.error('Fellow ID is required to add user');
            return;
        }

        const value = {
            fellow,
            name: values.name,
            standard: values.standard,
            rollnum: values.rollnum
        };

        if (!editable) {
            const response = await axios.post('http://localhost:8000/api/v1/student/add-student', value);
            console.log('Response from server:', response.data.student);
            message.success('Entry added');
        } else {
            const payload = {
                fellow : fellow,
                ...values
            };
        console.log(payload);
            console.log( 'dfj' , editable )
            const response = await axios.post('http://localhost:8000/api/v1/student/edit-student', {
               name: editable.name,
                payload
            });

            console.log('Response from server:', response.data);
            message.success('Entry updated');
            setEditable(null);
        }

        getAllStudents();
    } catch (error) {
        console.error('Error adding entry:', error);
        message.error('Failed to add entry');
    }
};
  const handleFilterChange = (value) => {
    // Handle filter change action
    console.log('Filter changed to:', value);
  };

  const AddUserButton = (
    <Button type="primary" icon={<UserAddOutlined />} onClick={handleAddUser}>
      Add User
    </Button>
  );

  const filters = (
    <Space>
      <Select
        defaultValue="Select Filter 1"
        style={{ width: 150 }}
        onChange={handleFilterChange}
      >
        <Select.Option value="filter1">Filter 1</Select.Option>
        <Select.Option value="filter2">Filter 2</Select.Option>
        <Select.Option value="filter3">Filter 3</Select.Option>
      </Select>
      <Select
        defaultValue="Select Filter 2"
        style={{ width: 150 }}
        onChange={handleFilterChange}
      >
        <Select.Option value="filter1">Filter 1</Select.Option>
        <Select.Option value="filter2">Filter 2</Select.Option>
        <Select.Option value="filter3">Filter 3</Select.Option>
      </Select>
    </Space>
  );



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Standard',
      dataIndex: 'standard'
    },
    {
      title: 'Current Division',
      dataIndex: 'current_division'
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance'
    },
    {
      title: 'Monthly Score',
      dataIndex: 'monthly_score'
    },
    {
      title: 'Quarter Score (Numeric)',
      dataIndex: 'quarter_scorenum'
    },
    {
      title: 'Quarter Score (Literary)',
      dataIndex: 'quarter_scorelit'
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <div>
          <EditOutlined
            onClick={() => {
              setModal(true);
              setEditable(record);
            }}
          />
          <DeleteOutlined
            className='mx-2'
            onClick={() => {
              // Handle delete action here, for example, show a confirmation modal
              console.log('Delete clicked for:', record);
            }}
          />
        </div>
      )
    }
  ];

  return (
    <>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => setStudent(true)}>{AddUserButton}</Menu.Item>
          <Menu.Item key="2">{filters}</Menu.Item>
        </Menu>
      </Header>
      <Table
        bordered
        columns={columns}
        dataSource={students}
        rowKey={(record) => record._id} // Assuming _id is a unique identifier for each student
      />
      {student && (
        <Modal
          visible={student}
          title="Add Student"
          onCancel={() => setStudent(false)}
          footer={null}
        >
          <Form layout='vertical'
          onFinish={handleAddUser}>
            <Form.Item value = {name} label='Name' name='name'>
              <Input type="text" />
            </Form.Item>
            <Form.Item value= {rollnum} label='RollNo.' name='rollnum'>
              <Input type="number" />
            </Form.Item>
            <Form.Item label='Standard' name='standard'>
              <Select>
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
                <Select.Option value="4">4</Select.Option>
                <Select.Option value="5">5</Select.Option>
              </Select>
            </Form.Item>
            <div>
              <Button type='primary' htmlType='submit'>Save</Button>
            </div>
          </Form>
        </Modal>
      )}
      {modal && (
        <Modal
          visible={modal}
          title="Edit Student"
          onCancel={() => setModal(false)}
          footer={null}
        >
          <Form layout="vertical"  onFinish={handleAddUser}>
            <Form.Item label="Current Division" name="activity_performed" initialValue="A">
              <Select>
                <Select.Option value="Social">Social</Select.Option>
                <Select.Option value="group-diss">group-diss</Select.Option>
                <Select.Option value="Active-part">Active-part</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
                <Select.Option value="None">None</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Attendance" name="attendance" initialValue={0}>
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Monthly Score" name="monthly_score" initialValue={0}>
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Quarter Score Number" name="quarter_scorenum" initialValue={0}>
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Quarter Score Literacy" name="quarter_scorelit" initialValue={0}>
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default Home;
