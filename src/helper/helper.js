import _ from "lodash";

export function getSum(transaction, type) {
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount"); // [300, 350, 500]
      return {
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
}

export function getLabels(transaction) {
  let amountSum = getSum(transaction, "type");

  let Total = _.sum(getSum(transaction));

  let percent = _(amountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();

  return percent;
}

export function chart_Data(transaction, custom) {
  let bg = _.map(transaction, (a) => a.color);
  bg = _.uniq(bg);
  let dataValue = getSum(transaction);
  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: bg,
          hoverOffset: 4,
        },
      ],
    },
    options: {},
  };

  return custom ?? config;
}

export function getTotal(transaction) {
  return _.sum(getSum(transaction));
}

export function getFullDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  return `${day}-${month}-${year}`;
}

export function getTransactionsMessage(transactions) {
  const startDate = transactions[0].Date;
  const transactionsLength = transactions.length;
  const endDate = transactions[transactionsLength - 1];

  let message = `starting date: ${startDate}, end date: ${endDate}.
                    Your transactions are: \n                 
    `;

  transactions.forEach((transaction, index) => {
    const transactionMessage = ` date: ${transaction.date}, type: ${transaction.type}, name: ${transaction.name}, amount:${transaction.amount}.\n`;
    message += transactionMessage;
  });

  return message;
}
