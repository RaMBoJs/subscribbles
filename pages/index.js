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
