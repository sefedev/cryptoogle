import React from "react";

const CryptoAsset = ({ cryptoAsset }) => {
  return (
    <>
      <tr>
        <td>
          <img
            src={cryptoAsset.image}
            alt={cryptoAsset.symbol}
            width="20px"
            height="20px"
          />{" "}
          &nbsp;
          {cryptoAsset.symbol.toUpperCase()}
        </td>
        <td>{cryptoAsset.name}</td>
        <td>${cryptoAsset.current_price.toLocaleString("en-US")}</td>
        <td>${cryptoAsset.market_cap.toLocaleString("en-US")}</td>
        <td>${cryptoAsset.high_24h.toLocaleString("en-US")}</td>
        <td>${cryptoAsset.low_24h.toLocaleString("en-US")}</td>
      </tr>
    </>
  );
};

export default CryptoAsset;

{
  /* <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      /> */
}
