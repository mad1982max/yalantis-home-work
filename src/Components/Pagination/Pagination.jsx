import prev from "Assets/img/ico/back.png";
import forward from "Assets/img/ico/forward.png";
import "Components/Pagination/pagination.css";

const Pagination = ({
  choosePerPage,
  currentPerPage,
  chooseNextPage,
  currentPage,
  perPageVars,
  nextPrevAvaliable: { isNext, isPrev },
}) => {
  return (
    <>
      <div className="pagination-wrapper">
        <div className="perPage-wrapper">
          {perPageVars.map((pageVar, i) => (
            <button
              key={pageVar + i}
              onClick={() => choosePerPage(pageVar)}
              className={
                currentPerPage === pageVar
                  ? "current-per-page perPageBtn"
                  : "perPageBtn"
              }>
              {pageVar}
            </button>
          ))}
        </div>

        <div className="to-page-wrapper">
          <button
            disabled={!isPrev}
            className="prev-next-page"
            onClick={() => chooseNextPage(-1)}>
            <img src={prev} alt="prev" />
          </button>

          <div className="currPage">{currentPage}</div>

          <button
            disabled={!isNext}
            className="prev-next-page"
            onClick={() => chooseNextPage(1)}>
            <img src={forward} alt="forvard" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
