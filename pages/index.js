import TransactionCard from "@/Components/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header";

export default function HomePage({ transactionsData, setTransactionsData }) {
  return (
    <>
      <Header />
      <TransactionForm
        transactionsData={transactionsData}
        setTransactionsData={setTransactionsData}
      />

      {transactionsData.map((element) => {
        return <TransactionCard key={element.id} transaction={element} />;
      })}
    </>
  );
}
