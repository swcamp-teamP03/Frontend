import React, { Dispatch } from 'react';
import { ConditionAction } from '../CreateCondition';
import * as S from './DropDownList.styles';

interface DropDonwList {
  list: { title: string }[];
  dispatch: Dispatch<ConditionAction>;
  onClose: () => void;
  type: 'CHANGE_COUNT' | 'CHANGE_LENGTH';
}

const DropwDownList = ({ list, dispatch, onClose, type }: DropDonwList) => {
  const key = type === 'CHANGE_COUNT' ? 'createCount' : 'copyLength';

  const handleDropDown = (value: string) => {
    dispatch({ type, key, value });
    onClose;
  };

  return (
    <>
      <S.Container>
        {list.map((item) => (
          <div onClick={() => handleDropDown(item.title)} key={item.title}>
            {item.title}
          </div>
        ))}
      </S.Container>
    </>
  );
};

export default DropwDownList;
