import React, { useState, useEffect } from "react";
import CryptoAsset from "./CryptoAsset";
import ReactPaginate from "react-paginate";

const CryptoAssetList = ({ cryptoAssets, filteredItem }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(cryptoAssets.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cryptoAssets.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, cryptoAssets]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cryptoAssets.length;
    setItemOffset(newOffset);
  };

  let filtered = cryptoAssets.filter((crypto) => crypto.name.includes(filteredItem))

  console.log (filtered.name)

  return (
    <>
      <table>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Symbol</th>
            <th style={{ width: "15%" }}>Crypto Assets</th>
            <th style={{ width: "20%" }}>Price</th>
            <th style={{ width: "25%" }}>MarketCap</th>
            <th style={{ width: "15%" }}>24H High</th>
            <th style={{ width: "15%" }}>24H Low</th>
          </tr>
        </thead>

        <tbody>
          {filteredItem.length < 1
            ? currentItems.map((cryptoAsset) => {
                return (
                  <CryptoAsset key={cryptoAsset.id} cryptoAsset={cryptoAsset} />
                );
              })
            : null}
        </tbody>
      </table>
      <div className="pagine">
        <ReactPaginate
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
        />
      </div>
    </>
  );
};

export default CryptoAssetList;
