import React from 'react'
import { Redirect } from "react-router-dom"


// const HYDiscover = React.lazy(_ => import("../pages/discover"));
const discover = React.lazy(_ => import('@/pages/discover'))
const friend = React.lazy(_ => import('@/pages/friend')) 
const mine = React.lazy(_ => import('@/pages/mine')) 

const recommends = React.lazy(_ => import('@/pages/discover/c-pages/recommends'))
const ranking = React.lazy(_ => import('@/pages/discover/c-pages/ranking'))
const songs = React.lazy(_ => import('@/pages/discover/c-pages/songs'))
const djradio = React.lazy(_ => import('@/pages/discover/c-pages/djradio'))
const artist = React.lazy(_ => import('@/pages/discover/c-pages/artist'))
const album = React.lazy(_ => import('@/pages/discover/c-pages/album'))
const player = React.lazy(_ => import('@/pages/player'))

// import discover from "@/pages/discover"
// import friend from "@/pages/friend"
// import mine from "@/pages/mine"

// import ranking from '@/pages/discover/c-pages/ranking'
// import songs from '@/pages/discover/c-pages/songs'
// import djradio from '@/pages/discover/c-pages/djradio'
// import artist from '@/pages/discover/c-pages/artist'
// import album from '@/pages/discover/c-pages/album'
// import player from '@/pages/player'


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: '/discover/recommend',
        component: recommends,
      },
      {
        path: '/discover/ranking',
        component: ranking
      },
      {
        path: '/discover/songs',
        component: songs
      },
      {
        path: '/discover/djradio',
        component: djradio
      },
      {
        path: '/discover/artist',
        component: artist
      },
      {
        path: '/discover/album',
        component: album
      },
      {
        path: '/discover/player',
        component: player
      }
    ]
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path: '/friend',
    component: friend
  },
]

export default routes