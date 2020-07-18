import * as React from "react";
import style from "./form.module.css";

const NewItemForm = () => (
  <form className={style.wrapper}>
    <div className="form-row">
      <div className="form-group col-md-8">
        <label htmlFor="formItemName">Item name</label>
        <input
          type="text"
          className="form-control"
          id="formItemName"
          aria-describedby="itemNameHelp"
          placeholder="yummy food"
        />
        <small id="itemNameHelp" className="form-text text-muted">
          We don't want more than one piece of the same food in our fridge.
        </small>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-sm-3">
        <label htmlFor="formExpiresIn">Expires in</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="formExpiresIn"
            aria-label="Expires in"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              seconds
            </span>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default NewItemForm;
