require("dotenv").config();

const tnb = require("thenewboston");

const sender = new tnb.Account(process.env.SENDER_SIGNING_KEY);

const tnbPay = new tnb.AccountPaymentHandler({
  account: sender,
  bankUrl: "http://18.218.193.164",
});

const run = async () => {
  const txs = [
    {
      amount: 1,
      recipient: "=AccountNumber",
    },
    {
      amount: 1,
      recipient: "AccountNumber",
    },
  ];

  await tnbPay.init();
  await tnbPay.sendBulkTransactions(txs);
};

console.log(sender.accountNumberHex);
run();
