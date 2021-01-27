const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
// //代表正則開始
// \代表解析例外字符
// \d匹配數字
// ()分組
// {2}匹配幾位數字

export function parseLyric (lyricString) {
  const lineStrings = lyricString.split("\n")

  const lyrics = []
  for(let line of lineStrings) {
    if(line) { 
      const result = parseExp.exec(line)
      // console.log(result)
      if (!result) continue
      // 轉為毫秒
      const time1 = result[1] * 60 * 1000
      const time2 = result[2] * 1000
      const time3 = result[3].length === 3? result[3] * 1: result[3] * 10
      const time = time1 + time2 + time3
      const content = line.replace(result[0], []).trim()
      // const content = line.replace(parseExp, [])
      const lineObj = {time, content}
      lyrics.push(lineObj)
    }
  }
  return lyrics

}