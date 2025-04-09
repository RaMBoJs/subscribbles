import TransactionCard from "@/Components/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header";

export default function HomePage({
  transactionsData,
  onAddTransaction,
  onDeleteTransaction,
}) {
  return (
    <>
      <Header />
      <TransactionForm onAddTransaction={onAddTransaction} />

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
