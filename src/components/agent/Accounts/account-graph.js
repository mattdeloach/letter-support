export const hours = [
  '4/8',
  '4/9',
  '4/10',
  '4/11',
  '4/12',
  '4/13',
  '4/14',
  '4/15',
  '4/16',
  '4/17',
  '4/18',
  '4/19',
];

export const paymentByStatus = {
  all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10].map(d => (d * 3.14).toFixed(2)),
  successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8].map(d => (d * 3.14).toFixed(2)),
  failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2].map(d => (d * 3.14).toFixed(2))
};
