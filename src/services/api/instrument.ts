import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */
export async function getInstrumentList(options?: { [key: string]: any }) {
  return request<API.InstrumentList>('/api/Instrument', {
    method: 'GET',
    ...(options || {}),
  });
}
