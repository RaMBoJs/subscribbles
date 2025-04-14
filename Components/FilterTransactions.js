import { data } from "@/assets/transactions";

export default function FilterTransaction({ handleFilter }) {
  return (
    <>
      <form onSubmit={handleFilter}>
        <select name="option">
          <option value={"All"}>All</option>
          {data.map((element, index) => {
            return (
              <option key={index} value={element.category}>
                {element.category}
              </option>
            );
          })}
        </select>
        <button type="submit">Hier drücken</button>
      </form>
    </>
  );
}
