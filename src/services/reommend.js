import request from './request'

export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbums(limit="8") {
  return request({
    url: "/album/new",
    params: {
      limit,
    }
  })
}

// export function getTopList(idx) {
//   return request({
//     url: "/toplist/detail"
//   })
// }

export function getTopList(id) {
  console.log(id);
  return request({
    url: "/playlist/detail",
    params: {
      id,
    }
  })
}