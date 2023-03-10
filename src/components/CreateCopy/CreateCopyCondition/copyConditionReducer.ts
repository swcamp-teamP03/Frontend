export interface CopyConditionAction {
  type: 'CHANGE_INPUT' | 'CHANGE_TYPE' | 'CHANGE_LENGTH' | 'CHANGE_COUNT' | 'ADD_KEYWORD' | 'REMOVE_KEYWORD';
  key: string;
  value: string | number;
}

export interface CopyConditionInit {
  copyGroupName: string;
  brandName: string;
  sector: string;
  productName: string;
  keyword: string[];
  createCount: number;
  copyLength: number;
  type: string;
}
export const copyConditionReducer: React.Reducer<CopyConditionInit, CopyConditionAction> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, [action.key]: action.value };
    case 'CHANGE_TYPE':
      return { ...state, [action.key]: action.value };
    case 'CHANGE_LENGTH': {
      const prev = Number(state.copyLength);
      return { ...state, [action.key]: action.value === 'plus' ? prev + 50 : prev - 50 };
    }
    case 'CHANGE_COUNT':
      return { ...state, [action.key]: action.value };
    case 'ADD_KEYWORD':
      if (typeof action.value === 'string') {
        return { ...state, [action.key]: state.keyword.concat(action.value) };
      }
    case 'REMOVE_KEYWORD':
      return { ...state, [action.key]: state.keyword.filter((keyword) => keyword !== action.value) };
  }
};

export const copyConditionInit = {
  copyGroupName: '',
  brandName: '',
  sector: '',
  productName: '',
  keyword: [],
  createCount: 3,
  copyLength: 100,
  type: '리뷰',
};
