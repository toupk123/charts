import EditForm, { EditFormActionType } from '@/components/EditForm';
import { getInstrumentList } from '@/services/api/instrument';
import { ExclamationCircleFilled, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button, Col, Modal, Row } from 'antd';
import React, { useRef } from 'react';

const columns: ProColumns<API.settingsListItem>[] = [
  {
    title: '#',
    dataIndex: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '序列号',
    dataIndex: 'id2',
  },
  {
    title: 'ip地址',
    dataIndex: 'id3',
  },
];

const defaultData = new Array(21)
  .fill({ name: 'name', id: '1' })
  .map((item, index) => ({ ...item, id: index }));

const config = [
  {
    label: '名称',
    name: 'name',
    rules: [{ required: true }],
    type: 'ProFormText',
  },
  {
    label: '类型',
    name: 'type',
    type: 'ProFormSelect',
    rules: [{ required: true }],
    options: [
      {
        value: 'YD260',
        label: 'YD260',
      },
      {
        value: 'YD285',
        label: 'YD285',
      },
      {
        value: 'YD510',
        label: 'YD510',
      },
    ],
  },
  {
    label: 'ip地址',
    name: 'name2',
    rules: [{ required: true }],
    type: 'ProFormText',
  },
];

const defaultConfig = [
  {
    label: '类型',
    name: 'type',
    type: 'ProFormSelect',
    rules: [{ required: true }],
    options: [],
  },
];

const { confirm } = Modal;
const Settings: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const editRef = useRef<EditFormActionType>();

  const handleDel = (rows: API.settingsListItem[]) => {
    confirm({
      title: '删除',
      icon: <ExclamationCircleFilled />,
      content: '是否确认删除？',
      onOk() {
        console.log(2, rows);
      },
    });
  };
  const columnsOption: ProColumns<API.settingsListItem>[] = [
    ...columns,
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            editRef.current?.openModal(record);
          }}
        >
          修改
        </a>,
        <a key="subscribeAlert" onClick={() => handleDel([record])}>
          删除
        </a>,
      ],
    },
  ];
  const successCB = () => {
    actionRef.current?.reload();
  };
  return (
    <>
      <ProTable<API.settingsListItem, API.PageParams>
        rowKey="id"
        request={getInstrumentList}
        search={false}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => editRef.current?.openModal()}>
            <PlusOutlined />
            <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        tableAlertOptionRender={({ selectedRows, onCleanSelected }) => (
          <div>
            <a onClick={onCleanSelected} style={{ paddingLeft: 12 }}>
              取消全选
            </a>
            <a onClick={() => handleDel(selectedRows)} style={{ paddingLeft: 12 }}>
              批量删除
            </a>
            <a style={{ paddingLeft: 12 }}>批量设置</a>
          </div>
        )}
        columns={columnsOption}
        actionRef={actionRef}
        defaultData={defaultData}
        rowSelection={{}}
      />
      <EditForm ref={editRef} title="采集器/网关" successCB={successCB} config={config} />
    </>
  );
};

const DetailsColumns = [
  {
    title: '通道号',
    dataIndex: 'id',
  },
  {
    title: '传感器类型',
    dataIndex: 'id1',
  },
  {
    title: '传感器ID',
    dataIndex: 'id2',
  },
  {
    title: '通道号/地址',
    dataIndex: 'id3',
  },
  {
    title: '灵敏度',
    dataIndex: 'id4',
  },
  {
    title: '灵敏度单位',
    dataIndex: 'id5',
  },
  {
    title: '角度',
    dataIndex: 'id6',
  },
  {
    title: '使能',
    dataIndex: 'id7',
  },
  {
    title: '需供电',
    dataIndex: 'id8',
  },
];
const Details = () => {
  const actionRef = useRef<ActionType>();
  const editRef = useRef<EditFormActionType>();

  const successCB = () => {
    actionRef.current?.reload();
  };
  const handleDel = (rows: API.settingsListItem[]) => {
    confirm({
      title: '删除',
      icon: <ExclamationCircleFilled />,
      content: '是否确认删除？',
      onOk() {
        console.log(2, rows);
      },
    });
  };
  return (
    <>
      <ProTable<API.settingsListItem, API.PageParams>
        rowKey="id"
        request={getInstrumentList}
        search={false}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => editRef.current?.openModal()}>
            <PlusOutlined />
            <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        tableAlertOptionRender={({ selectedRows, onCleanSelected }) => (
          <div>
            <a onClick={onCleanSelected} style={{ paddingLeft: 12 }}>
              取消全选
            </a>
            <a onClick={() => handleDel(selectedRows)} style={{ paddingLeft: 12 }}>
              批量删除
            </a>
          </div>
        )}
        columns={DetailsColumns}
        actionRef={actionRef}
        defaultData={defaultData}
        rowSelection={{}}
      />
      <EditForm ref={editRef} title="采集器/网关" successCB={successCB} config={defaultConfig} />
    </>
  );
};

const Instrument = () => {
  return (
    <PageContainer>
      <Row>
        <Col span={10}>
          <div style={{ marginRight: 12 }}>
            <Settings />
          </div>
        </Col>
        <Col span={14}>
          <Details />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Instrument;
