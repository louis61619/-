import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'
import { getHotRecommendAction } from '../../store/actionCreators'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'
import {
  HotRecommendWrapper
} from './style'



export default memo(function HotRecommend() {

  // state

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title="熱門推薦" keywords={["華語", "流行", "民謠", "搖滾", "電子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map(item => {
            return (
              <SongsCover key={item.id} info={item}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
