// 肯定配置项生成弹窗式编辑表单，根据antd pro组件生成
// 实际使用的还是Pro的组件，只是可能对某些表单项会做一些包装
// 默认唯一key值的名称是id
// by 2025/2/12
import type { ModalFormProps, ProFormItemProps } from '@ant-design/pro-components';
import { ModalForm, ProFormCheckbox, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { Form, message } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
const components: Record<string, React.FC> = {
  ProFormText: ProFormText,
  ProFormSelect: ProFormSelect,
  ProFormCheckbox: ProFormCheckbox,
};

const defaultFormProps: ModalFormProps = {
  layout: 'horizontal',
  labelAlign: 'left',
  labelWrap: true,
  scrollToFirstError: true,
  grid: true,
  rowProps: {
    gutter: [16, 0],
  },
};

export type Item = {
  type: string; // 组件名称比如ProInput
} & ProFormItemProps;

export type EditFormActionType = {
  openModal: (val?: Record<string, any>) => void;
};

export type Props<T> = {
  config: Item[];
  addFn?: (params: Record<string, any>) => Promise<T>;
  editFn?: (params: Record<string, any>) => Promise<T>;
  successCB?: () => void;
} & ModalFormProps;

const EditForm = forwardRef(function <T extends Record<string, any>>(props: Props<T>, ref) {
  const { config, addFn, editFn, successCB, ...modalResPro } = props;
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [modalForm, setmodalForm] = useState<Record<string, any>>({}); //因为表单状态管理只储存，表单项里面的值，所以需要自己管理

  const handleFinish = async (value: Record<string, any>) => {
    const isEdit = modalForm.id;
    const fn = isEdit ? editFn : addFn;
    if (!fn) return false;
    const hide = message.loading(isEdit ? '正在新增' : '正在更新');
    try {
      await fn({ ...modalForm, ...value });
      hide();
      message.success(isEdit ? '新增成功！' : '更新成功！');
      return true;
    } catch (error) {
      hide();
      message.error(isEdit ? '新增失败！' : '更新失败！');
      return false;
    }
  };
  const openModal = (val?: Record<string, any>) => {
    form.resetFields();
    if (val) form.setFieldsValue(val);
    setmodalForm(val || {});
    setOpen(true);
  };

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  return (
    <ModalForm
      {...defaultFormProps}
      form={form}
      open={open}
      {...modalResPro}
      onFinish={async (value) => {
        const success = await handleFinish(value);
        if (success) {
          setOpen(false);
          if (successCB) successCB();
        }
      }}
      onOpenChange={setOpen}
    >
      {config.map((item) => {
        const { type, ...resPro } = item;
        const Com = components[type];
        return <Com key={item.name} colProps={{ md: 12, xl: 12 }} {...resPro}></Com>;
      })}
    </ModalForm>
  );
});

export default EditForm;
