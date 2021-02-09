import classNames from "classnames";
import { v4 } from "uuid";
import Button from "Components/Button/Button";
import prev from "Assets/img/ico/back.png";
import forward from "Assets/img/ico/forward.png";
import "Components/Pagination/pagination.css";

const Pagination = ({
  choosePerPage,
  currentPerPage,
  chooseNextPage,
  page,
  perPageVars,
  nextPrevAvaliable: { isNext, isPrev },
}) => {
  return (
    <>
      <div className="pagination-wrapper">
        <div className="perPage-wrapper">
          {perPageVars.map((pageVar) => (
            <Button
              id={v4()}
              key={v4()}
              onClick={() => choosePerPage(pageVar)}
              className={classNames("perPageBtn", {
                "current-per-page": currentPerPage === pageVar,
              })}
              title={pageVar}
            />
          ))}
        </div>

        <div className="to-page-wrapper">
          <Button
            disabled={!isPrev}
            className="prev-next-page"
            onClick={() => chooseNextPage(-1)}
            image={prev}
          />
          <div className="currPage">{page}</div>
          <Button
            disabled={!isNext}
            className="prev-next-page"
            onClick={() => chooseNextPage(+1)}
            image={forward}
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
