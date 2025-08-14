import EditForm, { EditFormActionType } from '@/components/EditForm';
import { getInstrumentList } from '@/services/api/instrument';
import { ExclamationCircleFilled, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button, Col, Modal, Row } from 'antd';
import { useRef } from 'react';

const columns: ProColumns<API.settingsListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
  },
  {
    title: '角色名称',
    dataIndex: 'name',
  },
  {
    title: '排序',
    dataIndex: 'id2',
  },

];

const defaultData = new Array(21)
  .fill({ name: 'name', id: '1' })
  .map((item, index) => ({ ...item, id: index }));
const Role = () => {
  const { confirm } = Modal;
  const editRef = useRef<EditFormActionType>();
  const actionRef = useRef<ActionType>();
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
  const successCB = () => {
    actionRef.current?.reload();
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
  return (
    <PageContainer>
      <Row>
        <Col span={14}>
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
            columns={columnsOption}
            actionRef={actionRef}
            defaultData={defaultData}
            rowSelection={{}}
          />
          <EditForm ref={editRef} title="采集器/网关" successCB={successCB} config={config} />
        </Col>
        <Col span={10}>1233</Col>
      </Row>
    </PageContainer>
  );
};  

export default Role;
