import { Button, Input, Modal, Select, Table } from "antd";
import React, { useState } from "react";
import css from "./Users.module.css"

const Users = () => {

    const [open, setOpen] = useState(false);



    const dataSource = [
        {
            id: '1',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '2',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '3',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '4',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '5',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'диллер', 
        },
        {
            id: '6',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'диллер',
        },
        {
            id: '7',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '8',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '9',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'диллер', 
        },
        {
            id: '10',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '11',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '12',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '13',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '14',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '15',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '16',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '17',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '18',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '19',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '20',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '21',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '22',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '23',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'розница',
        },
        {
            id: '24',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
        {
            id: '25',
            name: 'Красильников Вадим Ильич',
            email: 'dasjh1h@gmail.com',
            number: "891234567645",
            type: 'опт', 
        },
    ];

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Номер телефона',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Тип цены',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '',
            dataIndex: 'button',
            render: () => <Button onClick={()=>{setOpen(true)}}>Редактировать</Button> ,
        },
    ];


    return <div className={css.table}>
        <Table dataSource={dataSource}  indentSize='10px' size='small' columns={columns} />
        <Modal 
        title="Редактирование пользователя"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
      >
        <div>id: 1</div>
        <div>ФИО:</div>
        <Input  style={{
          width: '50%',
          marginBottom: '1%'
        }} />
        <div>Номер телефона:</div>
        <Input  style={{
          width: '50%',
          marginBottom: '1%' 
        }} />
        <div>Email:</div>
        <Input  style={{
          width: '50%',
          marginBottom: '1%' 
        }} />
        <div>Тип цены:</div>
        <Select
        defaultValue="розница"
        style={{
          width: 120,
        }}
        options={[
            {
              value: 'розница',
              label: 'розница',
            },
            {
              value: 'опт',
              label: 'опт',
            },
            {
              value: 'диллер',
              label: 'диллер',
            },
          ]}/>
      </Modal>
    </div>
}

export default Users;