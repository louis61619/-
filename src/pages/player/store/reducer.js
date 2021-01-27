import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  playList: [
    {
      "name": "错位时空",
      "id": 1808492017,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 12174057,
              "name": "艾辰",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 121076375,
          "name": "错位时空",
          "picUrl": "http://p3.music.126.net/8C0lwLE88j9ZwLyPQ9a4FA==/109951165595770076.jpg",
          "tns": [],
          "pic_str": "109951165595770076",
          "pic": 109951165595770080
      },
      "dt": 203930,
      "h": {
          "br": 320000,
          "fid": 0,
          "size": 8160045,
          "vd": -51151
      },
      "m": {
          "br": 192000,
          "fid": 0,
          "size": 4896045,
          "vd": -48559
      },
      "l": {
          "br": 128000,
          "fid": 0,
          "size": 3264045,
          "vd": -46889
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1421042,
      "mv": 0,
      "publishTime": 0
    },
    {
      "name": "星辰大海",
      "id": 1811921555,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 14077324,
              "name": "黄霄雲",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 121630728,
          "name": "星辰大海",
          "picUrl": "http://p3.music.126.net/9BgjaSNM9Bmkh5waahv_gQ==/109951165628223126.jpg",
          "tns": [],
          "pic_str": "109951165628223126",
          "pic": 109951165628223120
      },
      "dt": 207888,
      "h": {
          "br": 320000,
          "fid": 0,
          "size": 8316525,
          "vd": -55648
      },
      "m": {
          "br": 192000,
          "fid": 0,
          "size": 4989933,
          "vd": -53074
      },
      "l": {
          "br": 128000,
          "fid": 0,
          "size": 3326637,
          "vd": -51452
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7001,
      "mv": 0,
      "publishTime": 0
    }, 
    {
      "name": "孤帆",
      "id": 1814090981,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 9061,
              "name": "那英",
              "tns": [],
              "alias": []
          },
          {
              "id": 10445,
              "name": "姚晨",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [
          "电视剧《假日暖洋洋》主题曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 122002216,
          "name": "孤帆",
          "picUrl": "http://p4.music.126.net/GYskXcgP3O-s5C3aAqmzWg==/109951165649375753.jpg",
          "tns": [],
          "pic_str": "109951165649375753",
          "pic": 109951165649375760
      },
      "dt": 233664,
      "h": {
          "br": 320000,
          "fid": 0,
          "size": 9348525,
          "vd": -44210
      },
      "m": {
          "br": 192000,
          "fid": 0,
          "size": 5609133,
          "vd": -41600
      },
      "l": {
          "br": 128000,
          "fid": 0,
          "size": 3739437,
          "vd": -39953
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416986,
      "mv": 14236826,
      "publishTime": 0
    },
  ],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, // 0: 循環， 1: 隨機 2: 單曲
  lyricList: [],
  currentLyricIndex: 0
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList)
    case actionTypes.CHANGE_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.index)
    default:
      return state
  }
}

export default reducer