import TransactionCard from "@/Components/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header";
import NoDataHint from "@/Components/NoDataHint";
import AccountBalance from "@/Components/AccountBalance/AccountBalance";
import FilterTransaction from "@/Components/FilterTransactions/FilterTransactions";

export default function HomePage({
  transactionsData,
  onAddTransaction,
  onDeleteTransaction,
  handleOnSubmitFilterCategory,
}) {
  return (
    <>
      <Header />

      <AccountBalance transactions={transactionsData} />

      <FilterTransaction
        handleOnSubmitFilterCategory={handleOnSubmitFilterCategory}
      />

      <TransactionForm onAddTransaction={onAddTransaction} />

      <NoDataHint transactionsData={transactionsData}></NoDataHint>

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
