import React, { memo } from 'react'

import { getSizeImage } from '@/utils/formate-utils'
import { getSongDetailAction } from '@/pages/player/store'

import { TopRankingWrapper } from './style'
import { useDispatch } from 'react-redux'

export default memo(function TopRanking(props) {
  // props and state
  const { info } = props
  // console.log(info.tracks && info.tracks.slice(0, 10))

  // redux hooks
  const dispatch = useDispatch()

  // other handle
  const playMusic = item => {
    dispatch(getSongDetailAction(item.id))
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 100)} alt=""/>
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <button className="btn play sprite_02"></button>
          <button className="btn favor sprite_02"></button>
        </div>
      </div>
      <div className="list">
        {
          info.tracks && info.tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">
                  { index + 1 }
                </div>
                <div className="info">
                <div className="name text-nowrap">
                  {item.name}
                </div>
                <div className="operate">
                  <button className="btn sprite_02 play" 
                          onClick={e => playMusic(item)}></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>

                </div>
                
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
