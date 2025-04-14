import TransactionCard from "@/Components/TransactionCard/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header/Header";
import AccountBalance from "@/Components/AccountBalance/AccountBalance";
import IncomeExpanseView from "@/Components/IncomeExpanseView/IncomeExpanseView";
import NoDataHint from "@/Components/NoDataHint/NoDataHint";

export default function HomePage({
  transactionsData,
  handleAddTransaction,
  handleDeleteTransaction,
  handleOnChangeTypeView,
}) {
  return (
    <>
      <Header />
      <AccountBalance transactions={transactionsData} />
      <IncomeExpanseView handleOnChangeTypeView={handleOnChangeTypeView} />
      <TransactionForm handleAddTransaction={handleAddTransaction} />
      <NoDataHint transactionsData={transactionsData} />
      {transactionsData.map((element) => {
        return (
          <TransactionCard
            key={element.id}
            transaction={element}
            handleDeleteTransaction={handleDeleteTransaction}
          />
        );
      })}
    </>
  );
}
