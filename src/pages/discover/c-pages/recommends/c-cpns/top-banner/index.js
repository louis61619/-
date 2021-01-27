import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Carousel } from 'antd';
import { getTopBannerAction } from '../../store/actionCreators'

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

function TopBanner(props) {
  // state
  const [currentIndex, setCurrentIndex] = useState()

  // 組件和dispatch進行關聯: 獲取數據和操作
  const { topBanners } = useSelector(state => {
    return {
      // topBanners: state.get("recommend").get("topBanners")
      topBanners: state.getIn(["recommend", "topBanners"])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  // 其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他業務邏輯
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}> 
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={index}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <div className="btn left" onClick={e => bannerRef.current.prev()}></div>
          <div className="btn right" onClick={e => bannerRef.current.next()}></div>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default (memo(TopBanner))
