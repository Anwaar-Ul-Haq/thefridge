import * as React from "react";
import differenceInSeconds from "date-fns/differenceInSeconds";

const ListItems = ({ items }) => {
  const now = new Date();
  const [timeInSeconds, setTimeInSeconds] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeInSeconds(timeInSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [timeInSeconds]);

  return (
    <div
      style={{
        maxWidth: "600px",
      }}
    >
      {/* Start */}
      <div className="row">
        <div className="col-2">
          <h5>Item I.D</h5>
        </div>
        <div className="col-6">
          <h5>Item Name</h5>
        </div>
        <div className="col-4">
          <h5>Expires In</h5>
        </div>
      </div>
      {/* End */}
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
                  {" "}
                  <span
                    className={`badge badge-secondary ${
                      differenceInSeconds(new Date(item.expiresIn), now) < 6 &&
                      differenceInSeconds(new Date(item.expiresIn), now) > 0
                        ? "pulse"
                        : null
                    }`}
                  >
                    {differenceInSeconds(new Date(item.expiresIn), now) > 0 ? (
                      `${Math.max(
                        differenceInSeconds(new Date(item.expiresIn), now),
                        0
                      )}s`
                    ) : (
                      <span>EXPIRED</span>
                    )}
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
