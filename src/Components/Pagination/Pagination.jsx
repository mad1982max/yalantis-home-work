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
          {perPageVars.map((pageVar) => {
            const keyList = v4();
            return (
              <Button
                id={keyList}
                key={keyList}
                onClick={(e) => choosePerPage(e, "perPage", pageVar)}
                className={classNames("perPageBtn", {
                  "current-per-page": currentPerPage === pageVar,
                })}
                title={pageVar}
              />
            );
          })}
        </div>

        <div className="to-page-wrapper">
          <Button
            disabled={!isPrev}
            className="prev-next-page"
            onClick={(e) => chooseNextPage(e, "nextpage", -1)}
            image={prev}
          />
          <div className="currPage">{page}</div>
          <Button
            disabled={!isNext}
            className="prev-next-page"
            onClick={(e) => chooseNextPage(e, "nextpage", +1)}
            image={forward}
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
