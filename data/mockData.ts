
// 模拟赛事数据
export const tournamentsData = [
  {
    id: 'wttc2023',
    name: '2023世界乒乓球锦标赛',
    venue: '德班国际会议中心',
    startDate: '2023-10-15T14:00:00Z',
    players: ['马龙', '樊振东', '王楚钦', '张本智和', '莫雷加德'],
    format: '单淘汰赛制',
    isLive: true
  },
  {
    id: 'wtts2023',
    name: '2023世界乒乓球巡回赛 - 中国站',
    venue: '北京国家体育馆',
    startDate: '2023-10-18T09:00:00Z',
    players: ['孙颖莎', '陈梦', '王曼昱', '伊藤美诚', '早田希娜'],
    format: '小组赛+淘汰赛'
  },
  {
    id: 'asian2023',
    name: '2023亚洲乒乓球锦标赛',
    venue: '首尔奥林匹克体育场',
    startDate: '2023-10-20T11:00:00Z',
    players: ['林高远', '梁靖崑', '张禹珍', '张本智和', '郑荣植'],
    format: '团体赛+个人赛'
  },
  {
    id: 'wttfinals2023',
    name: '2023世界乒乓球总决赛',
    venue: '新加坡室内体育馆',
    startDate: '2023-10-23T13:30:00Z',
    players: ['樊振东', '王楚钦', '张本智和', '卡尔森', '奥恰洛夫'],
    format: '8人循环赛'
  },
  {
    id: 'chinaopen2023',
    name: '2023中国公开赛',
    venue: '深圳宝安体育馆',
    startDate: '2023-10-26T08:00:00Z',
    players: ['马龙', '樊振东', '王楚钦', '梁靖崑', '林高远'],
    format: '64人单淘汰'
  }
];

// 模拟直播链接
export const liveStreams = [
  {
    id: 'stream1',
    platformName: '央视体育',
    url: 'https://sports.cctv.com/pingpong',
    tournamentId: 'wttc2023',
    isLive: true
  },
  {
    id: 'stream2',
    platformName: '咪咕体育',
    url: 'https://www.migu.cn/sports/pingpong',
    tournamentId: 'wttc2023',
    isLive: true
  },
  {
    id: 'stream3',
    platformName: 'WTT官方',
    url: 'https://worldtabletennis.com/live',
    tournamentId: 'wtts2023',
    isLive: false
  },
  {
    id: 'stream4',
    platformName: '优酷体育',
    url: 'https://sports.youku.com/pingpong',
    tournamentId: 'asian2023',
    isLive: false
  },
  {
    id: 'stream5',
    platformName: 'ITTF YouTube',
    url: 'https://www.youtube.com/ittf',
    tournamentId: 'wttfinals2023',
    isLive: false
  }
];

