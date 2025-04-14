import TransactionCard from "@/Components/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header";
import NoDataHint from "@/Components/NoDataHint";
import AccountBalance from "@/Components/AccountBalance/AccountBalance";
import FilterTransaction from "@/Components/FilterTransactions";

export default function HomePage({
  transactionsData,
  onAddTransaction,
  onDeleteTransaction,
  handleFilter,
}) {
  return (
    <>
      <Header />

      <AccountBalance transactions={transactionsData} />

      <TransactionForm onAddTransaction={onAddTransaction} />

      <FilterTransaction handleFilter={handleFilter} />

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
