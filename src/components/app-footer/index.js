import React, { Fragment, memo } from 'react'

import {
  footerLinks,
  footerImages
} from '@/common/local-data'

import { 
  FooterWrapper,
  FooterLeft,
  FooterRight
} from './style'


export default memo(function AppFooter() {
  return (
    <FooterWrapper>
      <div className="wrap-v2 inner-block"> 
        <FooterLeft>
          <div className="link">
            {
              footerLinks.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <span>{item.title}</span>
                    <span className="line">|</span>
                  </Fragment>                
                )
              })
            }
          </div>
          <div className="info">
            <span className="sep">網易公司版權所有©1997-2021</span>
            <span>杭州樂讀科技有限公司運營：</span>
            <span>浙網文[2018]3506-263號</span>
          </div>
          <div className="info">
            <span className="sep">違法和不良信息舉報電話：0571-89853516</span>
            <span>舉報郵箱：ncm5990@163.com</span>
          </div>
          <div className="info">
            <span className="sep">粵B2-20090191-18 工業和信息化部備案管理系統網站</span>
            <span>浙公網安備33010902002564號</span>
          </div>
        </FooterLeft>
        <FooterRight>
            {
              footerImages.map(item => {
                return (
                  <div key={item.link} className="item">
                    <div className="link"></div>
                    <div className="title"></div>
                  </div>
                )
              })
            }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
