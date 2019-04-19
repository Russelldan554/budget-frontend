const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    name: "SafeWay",
    category: "shopping",
    amount: Math.floor(Math.random() * 30),
    account:"Savings",
    date: "2019-04-17"
  };
};

export function makeData(len = 55) {
  return range(len).map(d => {
    return {
      ...newPerson(),
    };
  });
}

export default {
  makeData
}
