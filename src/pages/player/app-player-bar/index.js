import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { 
  changeSequenceAction,
  getSongDetailAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/formate-utils'

import { Slider, message } from 'antd'
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'


export default memo(function AppPlayerBar() {

  //props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChangeing, setIsChangeing] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  //redux hooks
  const { 
    currentSong, 
    sequence, 
    lyricList,
    currentLyricIndex 
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(1813864802))
  }, [dispatch])
  // 第一次進入時設置音樂
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then((result) => {
      setIsPlaying(true)
    }).catch((err) => {
      setIsPlaying(false)
    });
  }, [currentSong])

  // other handle
  const duration = currentSong && currentSong.dt? currentSong.dt: 0
  const showDuration = formatDate(duration, "mm:ss")
  const showCurrentTime = formatDate(currentTime, "mm:ss")

  // let progress = currentTime / duration * 100

  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause(): audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    if(!isChangeing) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / duration * 100)
    }    

    // 獲取當前歌詞
    if(!lyricList.length) return
    let i = 0
    for(; i < lyricList.length; i++) {
      if(currentTime <= lyricList[i].time) { // 如果歌曲現在時間小於當前歌詞撥放的時間
        break
      }
    }

    if(currentLyricIndex !== i - 1) { // 防止dispatch操作過於頻繁
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      if(!content) return
      console.log(content)
      message.open({
        key: "lyric",
        content,
        duration: 0,
        className: "lyric-class"
      })
    }
  }

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if(currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(sequence))
    }
  }

  const SliderChange = useCallback((value) => {
    setIsChangeing(true)
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }, [duration])

  const sliderAfterChange = useCallback((value) => { // 拿到歌曲長度併計算百分比的位置
    const currentTime =  value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChangeing(false)

    if(!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => changeMusic(1)}></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={currentSong.al && getSizeImage(currentSong.al.picUrl, 35) } alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">
                { currentSong.name }
              </span>
              <a href="/todo" className="singer-name">
                { currentSong.ar && currentSong.ar[0].name }
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={progress}
                      onChange={SliderChange} 
                      onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{ showCurrentTime }</span>
                <span className="divider">/</span>
                <span className="duration">{ showDuration }</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
        <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" 
                    onClick={ e => changeSequence() }></button>
            <button className="sprite_player btn playlist" 
                    >
            </button>
        </div>
        </Operator>
      </div>
      {/* 時間發生改變回調onTimeUpdate */}
      {/* <audio ref={audioRef} onTimeUpdate={timeUpdate} /> */}
      <video name="media" 
             ref={audioRef} 
             onTimeUpdate={timeUpdate} 
             onEnded={e => handleMusicEnded()}
             type="audio/mpeg">
      </video>
    </PlaybarWrapper>
  )
})
