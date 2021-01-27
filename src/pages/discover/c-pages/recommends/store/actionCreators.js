import * as actionTypes from './constants'

import { 
  getTopBanner,
  getHotRecommend,
  getNewAlbums,
  getTopList
 } from '@/services/reommend'

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumsAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUN,
  newAlbums: res.albums
})

const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      // 往reducer派發
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumsAction(res))
    })
  }
}

export const getTopListAction = (id) => {
  return dispatch => {
    getTopList(id).then(res => {
      switch(id) {
        case 19723756:
          dispatch(changeUpRankingAction(res))
          break
        case 3779629:
          dispatch(changeNewRankingAction(res))
          break
        case 2884035:
          dispatch(changeOriginRankingAction(res))
          break
        default:
          break
      }
    })
  }
}