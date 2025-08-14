import EditForm, { EditFormActionType } from '@/components/EditForm';
import TreeTbale,{TreeType} from '@/components/TreeTbale/index';
import { PlusOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button,Modal } from 'antd';
import { useRef } from 'react';
const columns: ProColumns<API.settingsListItem>[] = [
  {
    title: '#',
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '编码',
    dataIndex: 'code',
    hideInSearch: true,
  },
  {
    title: '类型',
    dataIndex: 'type',
    hideInSearch: true,
  },
  {
    title: '排序',
    dataIndex: 'id3',
    hideInSearch: true,
  },
  {
    title: '描述',
    dataIndex: 'id4',
    hideInSearch: true,
  },
];

const queryDeptApi = (params) => {
  return Promise.resolve({
    data: [
      {
        parentId: 0,
        id: 12,
        deptName: '测试顶级组织',
        deptId: 123,
      },
      {
        parentId: 12,
        id: '123',
        deptName: '测试组织',
        deptId: 123,
      },
    ],
    code: 0,
  });
};

const getUserApi = (params) => {
  return Promise.resolve({
    data: [
      {
        parentId: 0,
        id: 12,
        deptName: '测试顶级组织',
        deptId: 123,
      },
      {
        parentId: 12,
        id: '123',
        deptName: '测试组织',
        deptId: 123,
      },
    ],
    code: 0,
  });
};
const { confirm } = Modal;
const Organization = () => {
  const editRef = useRef<EditFormActionType>();
  const treeRef = useRef<TreeType>();
  const successCB = () => {
    treeRef.current?.updateTree();
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
  const defaultConfig = [
    {
      label: '类型',
      name: 'type',
      type: 'ProFormSelect',
      rules: [{ required: true }],
      options: [],
    },
  ];
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
      <TreeTbale
        options={false}
        TreeRequest={queryDeptApi}
        request={getUserApi}
        treeParentKeys={{
          parentKeyName: 'parentId',
          childKeyName: 'id',
        }}
        treeRequestKey={{
          requestName: 'deptId',
          itemName: 'id',
        }}
        fieldNames={{ title: 'deptName', key: 'id' }}
        columns={columnsOption}
        search={{ labelWidth: 100 }}
        tableAlertRender={false}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => editRef.current?.openModal()}>
            <PlusOutlined />
            <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
      />
      <EditForm ref={editRef} title="采集器/网关" successCB={successCB} config={defaultConfig} />
    </PageContainer>
  );
};

export default Organization;
