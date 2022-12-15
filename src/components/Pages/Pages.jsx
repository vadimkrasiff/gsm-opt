import { Button, Input, Modal, Table } from "antd";
import { useState } from "react";

const Pages = () => {

    const [open, setOpen] = useState(false);

    const dataSource = [
        {
            key: '1',
            name: 'Главная',
        },
        {
            key: '2',
            name: 'Товары',
            age: 42,
        },
        {
            key: '3',
            name: 'Товар',
        },
        {
            key: '4',
            name: 'Поиск',
        },
        {
            key: '5',
            name: 'Регистрация',
        },
        {
            key: '4',
            name: 'Вход',
        },
    ];

    const columns = [
        {
            title: 'Страница',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '',
            dataIndex: '',
            render: () => <Button onClick={()=>{setOpen(true)}}>Редоктировать</Button>,
        },

    ];

    return <div>
        <Table dataSource={dataSource} columns={columns} style={{width: 500, 
    boxShadow: "0 0 5px rgb(0 0 0 / 10%)"}} />
    <Modal 
        title="Редактирование cтраницы"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}>
        <div>Название:</div>
        <Input  style={{
          width: '50%',
          marginBottom: '1%'
        }} />
        </Modal>
    </div>
}

export default Pages;