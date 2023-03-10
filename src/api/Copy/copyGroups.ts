import { CopyDetailResult, LikeResult } from './../../types/copy.d';
import { api } from '..';
import { QueryFunctionContext } from '@tanstack/react-query';
import { CopyGroupsResult } from '../../types/copy';

export const getCopyGroups = async (pageNum: number, count: number): Promise<CopyGroupsResult | null> => {
  const res = await api.get(`/copies?page=${pageNum}&size=${count}`);
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const likedCopy = async ({ id, favorite }: { id: number; favorite: boolean }): Promise<LikeResult | null> => {
  const res = await api.post(`/copy/${id}/like`, {
    favorite: !favorite,
  });
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const getCopyGroupDetail = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<CopyDetailResult | null> => {
  const [_, id] = queryKey;
  const res = await api.get(`/copy/${id}`);
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};
