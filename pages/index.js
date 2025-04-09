import TransactionCard from "@/Components/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header";
import AccountBalance from "@/Components/AccountBalance/AccountBalance";

export default function HomePage({
  transactionsData,
  onAddTransaction,
  onDeleteTransaction,
}) {
  return (
    <>
      <Header />
      <AccountBalance transactions={transactionsData} />
      <TransactionForm onAddTransaction={onAddTransaction} />{" "}
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
