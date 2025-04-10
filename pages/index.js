import TransactionCard from "@/Components/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header";
import NoDataHint from "@/Components/NoDataHint";

export default function HomePage({
  transactionsData,
  onAddTransaction,
  onDeleteTransaction,
}) {
  return (
    <>
      <Header />
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
