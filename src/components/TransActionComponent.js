import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions);
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    }
    const filteredData = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filteredData);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  return (
    <section>
      <div className="searchParent">
        <input
          type="text"
          value={searchItem}
          onChange={changeHandler}
          placeholder="Search for tnx...."
          className="search"
        />
      </div>

      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "expense" && "5px solid red" }}
            >
              <span>{t.desc}</span>
              <span>${t.amount}</span>
            </div>
          ))
        : "no item matchs !"}
    </section>
  );
};

export default TransActionComponent;
