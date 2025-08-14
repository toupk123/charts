import { ExclamationCircleFilled } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useRef } from 'react';

const columns = [
  {
    title: '#',
    dataIndex: 'id',
  },
  {
    title: '采集器ip',
    dataIndex: 'id1',
  },
  {
    title: '传感器ID/通道号',
    dataIndex: 'id2',
  },
  {
    title: '传感器状态',
    dataIndex: 'id3',
  },
  {
    title: '数值',
    dataIndex: 'id4',
  },
  {
    title: '时间',
    dataIndex: 'id5',
  },
  {
    title: '设备',
    dataIndex: 'id6',
  },
  {
    title: '测点',
    dataIndex: 'id7',
  },
  {
    title: '测量项',
    dataIndex: 'id8',
  },
];
const Status = () => {
  const actionRef = useRef<ActionType>();

  const { confirm } = Modal;
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
        <a key="subscribeAlert" onClick={() => handleDel([record])}>
          删除
        </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.settingsListItem, API.PageParams>
        rowKey="id"
        search={false}
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
        columns={columnsOption}
        actionRef={actionRef}
        rowSelection={{}}
      />
    </PageContainer>
  );
};

export default Status;
