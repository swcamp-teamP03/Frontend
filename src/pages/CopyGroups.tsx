import React from 'react';
import PageHeader from '../components/common/PageHeader';
import CopyGroupList from '../components/CopyGroups/CopyGroupList';
import NonCopyGroupList from '../components/CopyGroups/NonCopyGroupList';
import { Layout } from './Layout.styles';

const FakeData = {
  totalCopy: 2,
  copyList: [
    {
      copyId: 1,
      createDate: '2023-02-25',
      like: true,
      copyName: '나이키 할인 행사',
      tag: '태그1',
    },
    {
      copyId: 2,
      createDate: '2023-02-25',
      like: false,
      copyName: '룰루레몬 이벤트',
      tag: '태그4',
    },
  ],
};

const CopyGroups = () => {
  const { totalCopy, copyList } = FakeData;
  return (
    <Layout size="S">
      <PageHeader title="카피그룹 리스트" buttonTitle="카피 추천 받기" buttonSize="buttonL" onClick={() => {}} />
      {FakeData ? <CopyGroupList totalCopy={totalCopy} copyList={copyList} /> : <NonCopyGroupList />}
    </Layout>
  );
};

export default CopyGroups;
