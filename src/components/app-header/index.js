import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from '@/common/local-data'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'


export default memo(function AppHeader() {

  // 業務代碼
  const showSelectItem =  (item, index) => {
    if(index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          {/* a標籤空內容報錯，可以給文字，然後透過CSS偏移出去 */}
          <a href="#/" className="logo sprite_01">網易雲音樂</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className="select-item" key={index}>
                    {showSelectItem(item, index)}
                  </div> 
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音樂/視頻/電台/用戶" prefix={<SearchOutlined />} />
          <div className="center">創作者中心</div>
          <div>登入</div>
        </HeaderRight>
      </div>
      <div className="dvider"></div>
    </HeaderWrapper>
  )
})
