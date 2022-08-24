/**
 * トップのラインチャート（仮データ）
 */
export const chartData = [
  {
    "name": "6月",
    "firstData": 4000,
    "secondData": 2400
  },
  {
    "name": "7月",
    "firstData": 3000,
    "secondData": 1398
  },
  {
    "name": "8月",
    "firstData": 2000,
    "secondData": 9800
  },
  {
    "name": "9月",
    "firstData": 2780,
    "secondData": 3908
  },
  {
    "name": "10月",
    "firstData": 1890,
    "secondData": 4800
  },
  {
    "name": "11月",
    "firstData": 2390,
    "secondData": 3800
  },
  {
    "name": "12月",
    "firstData": 3490,
    "secondData": 4300
  },
  {
    "name": "1月",
    "firstData": 3490,
    "secondData": 4300
  },
  {
    "name": "2月",
    "firstData": 3000,
    "secondData": 1398
  },
  {
    "name": "3月",
    "firstData": 2000,
    "secondData": 9800
  }
];


/**
 * 食事履歴（仮データ）
 */
export const getDietHistories = async () => {
  const Img01 = await import('../assets/image/card01.jpg');
  const Img02 = await import('../assets/image/card02.jpg');
  const Img03 = await import('../assets/image/card03.jpg');
  const Img04 = await import('../assets/image/card04.jpg');
  const Img05 = await import('../assets/image/card05.jpg');
  const Img06 = await import('../assets/image/card06.jpg');
  const Img07 = await import('../assets/image/card07.jpg');

  return [
    {
      img: Img01.default,
      date: '05.21',
      link: '#',
      label: 'Morning'
    },
    {
      img: Img02.default,
      date: '05.21',
      link: '#',
      label: 'Lunch'
    },
    {
      img: Img03.default,
      date: '05.21',
      link: '#',
      label: 'Dinner'
    },
    {
      img: Img04.default,
      date: '05.21',
      link: '#',
      label: 'Snack'
    },
    {
      img: Img01.default,
      date: '05.21',
      link: '#',
      label: 'Morning'
    },
    {
      img: Img05.default,
      date: '05.21',
      link: '#',
      label: 'Lunch'
    },
    {
      img: Img06.default,
      date: '05.21',
      link: '#',
      label: 'Dinner'
    },
    {
      img: Img07.default,
      date: '05.21',
      link: '#',
      label: 'Snack'
    }
  ]
}

/**
 * コラム（仮データ）
 */
 export const getColumnEntries = async () => {
  const Img01 = await import('../assets/image/col01.jpg');
  const Img02 = await import('../assets/image/col02.jpg');
  const Img03 = await import('../assets/image/col03.jpg');
  const Img04 = await import('../assets/image/col04.jpg');
  const Img05 = await import('../assets/image/col05.jpg');
  const Img06 = await import('../assets/image/col06.jpg');
  const Img07 = await import('../assets/image/col07.jpg');
  const Img08 = await import('../assets/image/col08.jpg');

  return [
    {
      img: Img01.default,
      date: '2021.05.17   23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      link: '#',
      cat: ['魚料理', '和食', 'DHA']
    },
    {
      img: Img02.default,
      date: '2021.05.17   23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      link: '#',
      cat: ['魚料理', '和食', 'DHA']
    },
    {
      img: Img03.default,
      date: '2021.05.17   23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      link: '#',
      cat: ['魚料理', '和食', 'DHA']
    },
    {
      img: Img04.default,
      date: '2021.05.17   23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      link: '#',
      cat: ['魚料理', '和食', 'DHA']
    },
    {
      img: Img05.default,
      date: '2021.05.17   23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      link: '#',
      cat: ['魚料理', '和食', 'DHA']
    },
    {
      img: Img06.default,
      date: '2021.05.17   23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      link: '#',
      cat: ['魚料理', '和食', 'DHA']
    },
    {
      img: Img07.default,
      date: '2021.05.17   23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      link: '#',
      cat: ['魚料理', '和食', 'DHA']
    },
    {
      img: Img08.default,
      date: '2021.05.17   23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      link: '#',
      cat: ['魚料理', '和食', 'DHA']
    }
  ]
}

/**
 * 日記（仮データ）
 */
export const diaryEntries = [
  {
    date: '2021.05.21',
    time: '23:25',
    link: '#',
    content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: '2021.05.21',
    time: '23:25',
    link: '#',
    content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: '2021.05.21',
    time: '23:25',
    link: '#',
    content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: '2021.05.21',
    time: '23:25',
    link: '#',
    content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: '2021.05.21',
    time: '23:25',
    link: '#',
    content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: '2021.05.21',
    time: '23:25',
    link: '#',
    content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: '2021.05.21',
    time: '23:25',
    link: '#',
    content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    date: '2021.05.21',
    time: '23:25',
    link: '#',
    content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  }
];

/**
 * 運動記録（仮データ）
 */
 export const exerciseEntries = [
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
];