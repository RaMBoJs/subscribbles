import TransactionList from "@/Components/TransactionCard";
import Header from "@/Components/Header";

export default function HomePage({ transactionsData }) {
  return (
    <>
      <Header />
      {transactionsData.map((element) => {
        return <TransactionList key={element.id} transaction={element} />;
      })}
    </>
  );
}
