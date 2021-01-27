import styled from 'styled-components'

const img = require('@/assets/img/sprite_01.png')

export const HeaderWrapper = styled.div`
  height: 75px;
  background: #242424;
  font-size: 14px;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .dvider {
    height: 5px;
    background-color: #C20C0C;
  }

`

export const HeaderLeft = styled.div`
  color: white;
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;


    .select-item {
      position: relative;

      a { //沒有給固定寬度只是用padding將a標籤撐開
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          content: "";
          position: absolute;
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background-position: -190px 0;
          // 似乎因為webpack版本的關係所以要加上default
          background-image: url(${img.default});
        }
      }

      &:hover a, a.active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }

      .active .icon {
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #ccc;

  .search {
    height: 32px;
    line-height: 32px;
    background-color: #f5f5f5;
    border-radius: 16px;
    padding-left: 5px;
    overflow: hidden;
    display: flex;
    width: 158px;

    input {
      background: #f2f2f2;
      padding-left: 5px;
      ::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    border: 1px solid #4F4F4F;
    background-position: 0 -140px;
    line-height: 33px;
    border-radius: 20px;
    text-align: center;
    margin: 0 16px;
  }
`