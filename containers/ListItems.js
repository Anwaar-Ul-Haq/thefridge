import * as React from "react";
import differenceInSeconds from "date-fns/differenceInSeconds";

async function fetchItems(setItems) {
  const response = await fetch(`/api/get-items`);
  const jsonResponse = await response.json(); // parses JSON response into native JavaScript objects
  const items = jsonResponse.items;
  setItems(items);
}

const ListItems = () => {
  const [items, setItems] = React.useState([]);
  const now = new Date();

  React.useEffect(() => {
    fetchItems(setItems);
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
      }}
    >
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            <div className="container-sm">
              <div className="row">
                <div className="col-2">
                  <span title={`ID: ${item.id}`}>
                    #{item.id.slice(0, 3)}
                    {"\u2026"}
                  </span>
                </div>
                <div className="col-6">{item.name}</div>
                <div className="col-4 text-right">
                  expires in{" "}
                  <span className="badge badge-secondary">
                    {Math.max(
                      differenceInSeconds(new Date(item.expiresIn), now),
                      0
                    )}{" "}
                    s
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
