import TransactionCard from "@/Components/TransactionCard/TransactionCard";
import TransactionForm from "@/Components/TransactionForm/TransactionForm";
import Header from "@/Components/Header/Header";
import AccountBalance from "@/Components/AccountBalance/AccountBalance";
import FilterTransaction from "@/Components/FilterTransactions/FilterTransactions";
import IncomeExpanseView from "@/Components/IncomeExpanseView/IncomeExpanseView";
import NoDataHint from "@/Components/NoDataHint/NoDataHint";
import { Wrapper } from "@/Components/Wrapper/Wrapper";

export default function HomePage({
  transactionsData,
  categoriesData,
  handleAddTransaction,
  handleDeleteTransaction,
  handleOnChangeTypeView,
  handleOnSubmitFilterCategory,
  handleUpdateTransaction,
}) {
  return (
    <>
      <Header />
      <AccountBalance transactions={transactionsData} />
      <Wrapper>
        <FilterTransaction
          handleOnSubmitFilterCategory={handleOnSubmitFilterCategory}
          categoriesData={categoriesData}
        />
        <IncomeExpanseView handleOnChangeTypeView={handleOnChangeTypeView} />
      </Wrapper>
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
              handleUpdateTransaction={handleUpdateTransaction}
            />
          );
        })}
    </>
  );
}
