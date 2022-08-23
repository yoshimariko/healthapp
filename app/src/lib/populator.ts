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
export const DietHistory = async () => {
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
      label: 'Morning'
    },
    {
      img: Img02.default,
      date: '05.21',
      label: 'Lunch'
    },
    {
      img: Img03.default,
      date: '05.21',
      label: 'Dinner'
    },
    {
      img: Img04.default,
      date: '05.21',
      label: 'Snack'
    },
    {
      img: Img01.default,
      date: '05.21',
      label: 'Morning'
    },
    {
      img: Img05.default,
      date: '05.21',
      label: 'Lunch'
    },
    {
      img: Img06.default,
      date: '05.21',
      label: 'Dinner'
    },
    {
      img: Img07.default,
      date: '05.21',
      label: 'Snack'
    }
  ]
}