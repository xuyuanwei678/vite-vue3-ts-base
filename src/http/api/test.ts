/*
 * @Author: BlackJoken
 * @Date: 2022-01-11 15:44:28
 * @LastEditors: BlackJoken
 * @LastEditTime: 2022-01-12 14:07:26
 */
import service from '@/http/axios'
/**
 * 
 * @param data {}
 * @returns 
 */
export const getTestList = (data: Object) => {
  return service({
    url: '/cooperation/api/cooperation/cooperation/getMyApply',
    method: 'post',
    data
  })
}