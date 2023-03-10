import { useQuery } from '@tanstack/react-query';
import { getSentHistory } from '../../api/Campaign';

const useSenHisoryQuery = (id: string | undefined) => {
  return useQuery(['sentHistory', id], getSentHistory, {
    enabled: !!id,
  });
};

export default useSenHisoryQuery;
