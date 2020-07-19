import { v4 as uuid } from "uuid";
import getItems from "../../backend/getItems";
import addSeconds from "date-fns/addSeconds";
import fillFridge from "../../backend/fillFridge";

export default (req, res) => {
  let items = getItems();
  const id = uuid();
  const item = req.body;
  const newItem = {
    id,
    name: item.name,
    expiresIn: addSeconds(new Date(), item.expiresAfterSeconds),
  };
  items.push(newItem);
  fillFridge(items);

  res.statusCode = 200;
  res.json({ item: newItem });
};
