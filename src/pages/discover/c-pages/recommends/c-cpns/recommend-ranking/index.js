import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import {
  RankingWrapper
} from './style'


export default memo(function RecommendRanking() {

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual)
  const dispatch = useDispatch()


  // 19723756 飆升
  // 3779629 新歌
  // 2884035 原創
  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜單"/>
      <div className="tops">
        <TopRanking info={upRanking}></TopRanking>
        <TopRanking info={newRanking}></TopRanking>
        <TopRanking info={originRanking}></TopRanking>
      </div>
    </RankingWrapper>
  )
})