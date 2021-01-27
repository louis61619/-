import React, { memo } from 'react'

import {
  PlayerLeft,
  PlayerRight,
  PlayerWrapper
} from './style'

export default memo(function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>playerInfo</h2>
          <h2>playerContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>SimPlayList</h2>
          <h2>SongConent</h2>
          <h2>DownLoad</h2>
        </PlayerRight>
        
      </div>
    </PlayerWrapper>
  )
})
