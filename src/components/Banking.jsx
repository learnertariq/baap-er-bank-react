import React, { useEffect, useState } from "react";
import CardDeposit from "./CardDeposit";
import CardSm from "./CardSm";
import CardWidthdraw from "./CardWithdraw";

export default function Banking() {
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalWithdraw, setTotalWithdraw] = useState(0);
  const [totalBalance, setTotalBalance] = useState(1500);

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.name === "depositButton") {
      setTotalDeposit(totalDeposit + deposit);
      setTotalBalance(totalBalance + deposit);
    }

    if (e.target.name === "withdrawButton") {
      setTotalWithdraw(totalWithdraw + withdraw);
      setTotalBalance(totalBalance - withdraw);
    }

    setDeposit(0);
    setWithdraw(0);
    console.log(totalBalance);
  }

  function handleChange({ target }) {
    const value = parseInt(target.value);

    if (target.name === "deposit") {
      setDeposit(value);
    }
    if (target.name === "withdraw") {
      setWithdraw(value);
    }

    console.log(deposit, withdraw);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        <span className="text-blue-600">আপনার সম্পদ</span>
        <br />
        আমাদের নিকট <span className="text-red-500">আমানত !!!</span>
        {/* Calculated Balance */}
        <div className=" grid grid-cols-1 sm:grid-cols-3">
          <CardSm
            title="সর্বমোট জমা"
            subTitle={totalDeposit}
            symbol="$"
            bgColor="bg-blue-600"
            textColor="text-white"
          />
          <CardSm
            title="সর্বমোট উত্তলন"
            subTitle={totalWithdraw}
            symbol="$"
            bgColor="bg-red-600"
            textColor="text-white"
          />
          <CardSm
            title="মোট ব্যালেন্স"
            subTitle={totalBalance}
            symbol="$"
            bgColor="bg-green-600"
            textColor="text-white"
          />
        </div>
        {/* Input Debit / Credit */}
        <div className=" grid grid-cols-1 sm:grid-cols-2">
          <CardDeposit
            title="টাকা জমা করুন"
            subTitle="00"
            symbol="$"
            bgColor="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
            titleColor="text-white"
            onChange={handleChange}
            onSubmit={handleSubmit}
            value={deposit}
          />
          <CardWidthdraw
            title="টাকা উত্তোলন করুন"
            subTitle="00"
            symbol="$"
            bgColor="bg-gradient-to-tr from-blue-500 via-gray-500 to-pink-500"
            titleColor="text-white"
            onChange={handleChange}
            onSubmit={handleSubmit}
            value={withdraw}
          />
        </div>
      </h1>
    </div>
  );
}
