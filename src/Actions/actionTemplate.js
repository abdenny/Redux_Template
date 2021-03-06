import {
  TESTCASE1,
  TESTCASE_ADD_TO_ARRAY,
  TESTCASE_DELETE_FROM_ARRAY,
} from './actionTypes';

export const testCase1 = (countValue) => {
  return {
    type: TESTCASE1,
    count: countValue,
  };
};

export const testCaseAdd = (dataObj) => {
  return {
    type: TESTCASE_ADD_TO_ARRAY,
    data: dataObj,
  };
};

export const testCaseDelete = (id) => {
  return {
    type: TESTCASE_DELETE_FROM_ARRAY,
    id: id,
  };
};
