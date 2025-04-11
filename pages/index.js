import TransactionCard from "@/Components/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header";
import AccountBalance from "@/Components/AccountBalance/AccountBalance";
import IncomeExpanseView from "@/Components/IncomeExpanseView/IncomeExpanseView";
import NoDataHint from "@/Components/NoDataHint";

export default function HomePage({
  transactionsData,
  handleAddTransaction,
  onDeleteTransaction,
  handleOnChange,
}) {
  return (
    <>
      <Header />
      <AccountBalance transactions={transactionsData} />
      <IncomeExpanseView handleOnChange={handleOnChange} />
      <TransactionForm handleAddTransaction={handleAddTransaction} />
      <NoDataHint transactionsData={transactionsData} />
      {transactionsData.map((element) => {
        return (
          <TransactionCard
            key={element.id}
            transaction={element}
            onDeleteTransaction={onDeleteTransaction}
          />
        );
      })}
    </>
  );
}
