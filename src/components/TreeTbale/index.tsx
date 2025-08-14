import type { ActionType, ProTableProps } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { ParamsType } from '@ant-design/pro-provider';
import { Col, Row, Tree } from 'antd';
import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './index.less';
type requestData = {
  code: number;
  data: Record<string, any>[];
};

export type TreeType = {
  updateTree: () => void;
};
export type TreeTableProps<
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = 'text',
> = {
  TreeRequest: (params: Record<string, any>) => Promise<requestData>;
  fieldNames: { title?: string; key?: string };
  treeParentKeys?: { parentKeyName: string; childKeyName: string };
  treeRequestKey: { requestName: string; itemName: string };
  onSelectTreeChange?: (
    selectedKeys?: (string | number | bigint)[],
    option?: Record<string, any>,
  ) => void;
  treeRef?: React.Ref<TreeType | undefined>;
  defaultKeys?: string[];
} & ProTableProps<DataType, Params, ValueType>;

export const arrayToTree = (
  list: Record<string, any>[],
  parentId = 0,
  treeParentKeys?: { parentKeyName: string; childKeyName: string },
) => {
  const arr: Record<string, any>[] = [];
  list.forEach((item) => {
    let parentName = 'parentId';
    let childKeyName = 'id';
    if (treeParentKeys) {
      parentName = treeParentKeys.parentKeyName;
      childKeyName = treeParentKeys.childKeyName;
    }
    // 可能字符串 和数字，全转换为字符串
    if (item[parentName] + '' === parentId + '') {
      const children = arrayToTree(list, item[childKeyName], treeParentKeys);
      item.children = children;
      arr.push(item);
    }
  });

  return arr;
};

const TreeTable = <
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = 'text',
>(
  props: TreeTableProps<DataType, Params, ValueType>,
) => {
  const {
    TreeRequest,
    fieldNames,
    actionRef,
    treeRef,
    treeParentKeys,
    onSelectTreeChange,
    defaultKeys,
    request,
    treeRequestKey,
    ...resProps
  } = props;
  const Ref = useRef<ActionType>();
  const list: React.MutableRefObject<Record<string, any>[]> = useRef([]);
  const curTableRef = (actionRef || Ref) as React.MutableRefObject<ActionType | undefined>;
  const [useTreeData, setTreeData] = useState<Record<string, any>[]>([]);
  const currentTreeKeys = useRef<(string | number | bigint)[]>([]);
  const [treeSelectedKey, settreeSelectedKey] = useState<any>();

  const onSelect = (
    selectedKeys: (string | number | bigint)[],
    { selectedNodes }: { selectedNodes: Record<string, any>[] },
  ) => {
    currentTreeKeys.current = selectedKeys;
    curTableRef.current?.reset?.();
    settreeSelectedKey(selectedKeys);
    if (onSelectTreeChange) {
      onSelectTreeChange(selectedKeys, selectedNodes[0]);
    }
  };

  const handelParams = (params: Record<string, any>) => {
    if (fieldNames) {
      list.current.forEach((item) => {
        if (item[fieldNames.key || 'key'] === currentTreeKeys.current[0]) {
          params[treeRequestKey.requestName] = item[treeRequestKey.itemName];
        }
      });
    }

    return {
      ...params,
    };
  };
  const tableRequest = (params: Record<string, any>) => {
    if (request) {
      return request(handelParams(params));
    }
    return;
  };
  const updateTree = async () => {
    if (TreeRequest) {
      await TreeRequest({}).then((res) => {
        if (res.data) {
          list.current = res.data;
          if (currentTreeKeys.current.length === 0) {
            settreeSelectedKey(defaultKeys || [res.data[0]?.[fieldNames.key || 'key']]);
            currentTreeKeys.current = defaultKeys || [res.data[0]?.[fieldNames.key || 'key']];
            if (onSelectTreeChange) {
              setTimeout(() => {
                onSelectTreeChange(currentTreeKeys.current, res.data[0]);
              }, 50);
            }
          }
          setTreeData(arrayToTree(res.data, undefined, treeParentKeys));
          curTableRef.current?.reset?.();
        }
      });
    }
  };

  useImperativeHandle(
    treeRef,
    () => {
      return {
        updateTree,
      };
    },
    [],
  );

  useEffect(() => {
    updateTree();
  }, []);

  return (
    <Row>
      <Col span={5} className={styles.box}>
        <Tree
          style={{ height: '80vh', overflowY: 'auto' }}
          treeData={useTreeData}
          selectedKeys={treeSelectedKey}
          onSelect={onSelect}
          fieldNames={fieldNames}
          showLine
          blockNode
          autoExpandParent
        />
      </Col>
      <Col span={18} offset={1}>
        <ProTable
          manualRequest={true}
          request={tableRequest}
          {...resProps}
          actionRef={curTableRef}
        />
      </Col>
    </Row>
  );
};

export default TreeTable;
