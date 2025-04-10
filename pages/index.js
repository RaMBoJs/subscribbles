import TransactionCard from "@/Components/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header";
import AccountBalance from "@/Components/AccountBalance/AccountBalance";
import IncomeExpanseView from "@/Components/IncomeExpanseView/IncomeExpanseView";


export default function HomePage({
  transactionsData,
  onAddTransaction,
  onDeleteTransaction,
  handleOnChange,
}) {
 

  return (
    <>
      <Header />
      <AccountBalance transactions={transactionsData} />
      <IncomeExpanseView
        handleOnChange={handleOnChange}
      />
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
