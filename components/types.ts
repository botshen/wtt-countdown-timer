export interface Tournament {
  id: string;
  name: string;
  location: string;
  level: string;  // 比赛等级：如Grand Smash, Champions, Star Contender, Contender
  startDate: string;
  endDate: string;
  imageUrl: string;
}

export const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'WTT Star Contender Beijing 2024',
    location: '北京, 中国',
    level: 'Star Contender',
    startDate: '2024-09-12',
    endDate: '2024-09-17',
    imageUrl: 'https://static01.nyt.com/images/2022/01/05/world/05China-Olympics/merlin_185953652_a935dd6c-320f-4457-9ea9-e88bd808a34f-superJumbo.jpg',
  },
  {
    id: '2',
    name: 'WTT Champions Macao 2024',
    location: '澳门, 中国',
    level: 'Champions',
    startDate: '2024-10-20',
    endDate: '2024-10-24',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Macau_Center.jpg',
  },
  {
    id: '3',
    name: 'WTT Grand Smash Singapore 2024',
    location: '新加坡',
    level: 'Grand Smash',
    startDate: '2024-12-01',
    endDate: '2024-12-10',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Singapore_Merlion_cityscape.jpg',
  },
  {
    id: '4',
    name: 'WTT Contender Doha 2024',
    location: '多哈, 卡塔尔',
    level: 'Contender',
    startDate: '2024-11-05',
    endDate: '2024-11-09',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Doha_Skyline_Qatar_2.jpg/1200px-Doha_Skyline_Qatar_2.jpg',
  },
  {
    id: '5',
    name: 'WTT Finals Frankfurt 2024',
    location: '法兰克福, 德国',
    level: 'Finals',
    startDate: '2024-12-20',
    endDate: '2024-12-23',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Skyline_Frankfurt_am_Main_2015.jpg',
  }
];

// 获取下一个比赛
export const getNextTournament = (): Tournament | null => {
  const now = new Date();
  const upcomingTournaments = tournaments
    .filter(t => new Date(t.startDate) > now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  return upcomingTournaments.length > 0 ? upcomingTournaments[0] : null;
};

// 获取所有当年的赛事
export const getCurrentYearTournaments = (): Tournament[] => {
  const currentYear = new Date().getFullYear();
  return tournaments.filter(t => new Date(t.startDate).getFullYear() === currentYear);
}; 