import TransactionCard from "@/Components/TransactionCard/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header/Header";
import AccountBalance from "@/Components/AccountBalance/AccountBalance";
import FilterTransaction from "@/Components/FilterTransactions/FilterTransactions";
import IncomeExpanseView from "@/Components/IncomeExpanseView/IncomeExpanseView";
import NoDataHint from "@/Components/NoDataHint/NoDataHint";

export default function HomePage({
  transactionsData,
  handleAddTransaction,
  handleDeleteTransaction,
  handleOnChangeTypeView,
  handleOnSubmitFilterCategory,
  handleOnSubmitUpdateTransaction,
}) {
  return (
    <>
      <Header />
      <AccountBalance transactions={transactionsData} />
      <FilterTransaction
        handleOnSubmitFilterCategory={handleOnSubmitFilterCategory}
      />
      <IncomeExpanseView handleOnChangeTypeView={handleOnChangeTypeView} />
      <TransactionForm handleAddTransaction={handleAddTransaction} />
      <NoDataHint transactionsData={transactionsData} />
      {transactionsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((element) => {
          return (
            <TransactionCard
              key={element._id}
              transaction={element}
              handleDeleteTransaction={handleDeleteTransaction}
              handleOnSubmitUpdateTransaction={handleOnSubmitUpdateTransaction}
            />
          );
        })}
    </>
  );
}
