import * as React from "react";

const NewItemForm = (props) => {
  const [inputValue, setInputValue] = React.useState("");
  const [name, setName] = React.useState("");
  const [expiresAfterSeconds, setExpireIn] = React.useState(0);

  const addItem = (e) => {
    if (
      parseInt(expiresAfterSeconds) < 1 ||
      parseInt(expiresAfterSeconds) > 999
    ) {
      alert("Please enter numbers between 1 and 999");
      return;
    }
    const data = {
      name: name,
      expiresAfterSeconds: parseInt(expiresAfterSeconds),
    };

    fetch(`/api/add-item`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status == 400) {
          alert("Item with this name is already in the fridge.");
          return;
        }
        props.refreshData();
        setName("");
        setExpireIn(0);
      })
      .catch((error) => {
        debugger;
        alert(error);
      });
  };

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-8">
          <label htmlFor="formItemName">Item name</label>
          <input
            type="text"
            className="form-control"
            id="formItemName"
            aria-describedby="itemNameHelp"
            placeholder="yummy food"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <small id="itemNameHelp" className="form-text text-muted">
            We don't want more than one piece of the same food in our fridge.
          </small>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-sm-3">
          <label htmlFor="formExpiresAfterSeconds">Expires after</label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              id="formExpiresAfterSeconds"
              aria-label="Expires in"
              aria-describedby="basic-addon2"
              value={expiresAfterSeconds}
              onChange={(e) => {
                setExpireIn(e.target.value);
              }}
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                seconds
              </span>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={addItem}>
        Submit
      </button>
    </form>
  );
};

export default NewItemForm;
