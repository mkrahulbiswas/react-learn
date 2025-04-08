import ReactPaginate from "react-paginate"

export const ExampleOne = () => {
  const handlePageClick = (event: any) => {
    console.log(event)
  }
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonPoints">
          <span>Making <b>different position</b> of pagination</span>
        </div>
        <div className="exampleCommonContent">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            pageCount={10}
            pageRangeDisplayed={0}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-start"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            hrefBuilder={(page, pageCount, _selected) =>
              page >= 1 && page <= pageCount ? `/page/${page}` : '#'
            }
            hrefAllControls
            forcePage={0}
            onClick={(clickEvent) => {
              console.log('onClick', clickEvent);
            }}
            renderOnZeroPageCount={null}
          />
        </div>
        <div className="exampleCommonContent">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            pageCount={10}
            pageRangeDisplayed={0}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-center"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            hrefBuilder={(page, pageCount, _selected) =>
              page >= 1 && page <= pageCount ? `/page/${page}` : '#'
            }
            hrefAllControls
            forcePage={0}
            onClick={(clickEvent) => {
              console.log('onClick', clickEvent);
            }}
            renderOnZeroPageCount={null}
          />
        </div>
        <div className="exampleCommonContent">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            pageCount={10}
            pageRangeDisplayed={0}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-end"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            hrefBuilder={(page, pageCount, _selected) =>
              page >= 1 && page <= pageCount ? `/page/${page}` : '#'
            }
            hrefAllControls
            forcePage={0}
            onClick={(clickEvent) => {
              console.log('onClick', clickEvent);
            }}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonPoints">
          <span>This an example by using a live <b>API</b> response</span>
        </div>
        <div className="exampleCommonContent">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            pageCount={100}
            pageRangeDisplayed={0}
            marginPagesDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-center"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            hrefBuilder={(page, pageCount, _selected) =>
              page >= 1 && page <= pageCount ? `/page/${page}` : '#'
            }
            hrefAllControls
            forcePage={0}
            onClick={(clickEvent) => {
              console.log('onClick', clickEvent);
            }}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  )
}