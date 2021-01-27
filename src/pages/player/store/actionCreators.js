import * as actionTypes from './constants'

import { getRandom } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'

import { getSongDetail, getLyric } from "@/services/player"

const changeCurrentSongAction = currentSong => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changePlayListAction = playList => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

const changeLyricListAction = lyricList => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})




// 對外暴露的action
export const changeSequenceAction = sequence => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentLyricIndexAction = index => ({
  type: actionTypes.CHANGE_LYRIC_INDEX,
  index
})

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => { // 是在組件內部調用 所以有getSate
    const playList = getState().getIn(["player", "playList"])
    const sequence = getState().getIn(["player", "sequence"])
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])

    // debugger

    switch(sequence) {
      case 1: // 隨機播放      
        let randomIndex = -1
        do {
          randomIndex = getRandom(playList.length)
        } while (currentSongIndex === randomIndex); // 判斷條件成立時執行
        currentSongIndex = randomIndex
        break
      default: // 順序播放
        currentSongIndex += tag
        if(currentSongIndex >= playList.length) currentSongIndex = 0
        if(currentSongIndex < 0) currentSongIndex = playList.length - 1
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 請求歌詞
    dispatch(getLyricAction(currentSong.id))
  }
}


export const getSongDetailAction = (ids) => {
  return async (dispatch, getState) => {

    // 1.查找播放清單中是否有該ID
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2.判斷是否有找到
    let song = null
    if(songIndex !== -1) { // 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
    } else {
      await getSongDetail(ids).then(res => {       
        song = res.songs[0]

        // 1.將最新請求到數據加入播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)

        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
      })
    }

    // 3.請求該歌曲的歌詞
    dispatch(getLyricAction(song.id))

  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}

// export const getSongDetailAction = (ids) => {
//   return dispatch => {
//     getSongDetail(ids).then(res => {
//       dispatch(changeCurrentSongAction(res.songs[0]))
//     })
//   }
// }
