import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../App.css'
import useWindowDimensions from './WindowDimensions';
import Modal from './Modal';

function Pages() {


    const [offset, setOffset] = useState(1);
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)
    const [click, setClick] = useState(false);

    const { width, height } = useWindowDimensions()
    console.log(width);





    function handleClick() {
        setClick(!click);
        
    }




    const getData = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`)
        const data = res.data;
        const slice = offset == 0 ? data.slice(offset, offset + perPage) : data.slice((offset - 1) * perPage, (offset - 1) * 10 + perPage)

        const postData = slice.map((pd, ind) => {

            const x = pd.price_change_percentage_24h.toFixed(2);
            const y = pd.price_change_percentage_7d_in_currency.toFixed(2);

            if (width >= 1200) return (

                <tr key={ind}>
                    <td style={{  paddingRight: "5px" }}><i className="fa fa-star-o"></i></td>
                    <td style={{paddingRight:"5px"}}>{(offset - 1) * 10 + ind + 1}</td>
                    <td style={{width:"200px"}}><text ><img src={pd.image} style={{ height: "24px", width: "24px" }} /> {pd.name}  <span style={{ fontSize: "12px", fontWeight: "500", color: "gray" }}>{pd.symbol.toUpperCase()}</span></text></td>
                    <td><i classNamme="fa-regular fa-dollar-sign"></i>{pd.current_price}</td>
                    <td style={{ color: x > 0 ? "rgb(114, 180, 14)" : "crimson" }}><i className={x > 0 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i> {pd.price_change_percentage_24h.toFixed(2)}<i className="fa-light fa-percent"></i></td>
                    <td style={{ color: y > 0 ? "rgb(114, 180, 14)" : "crimson" }}><i className={y > 0 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i>{pd.price_change_percentage_7d_in_currency.toFixed(2)}<i className="fa-light fa-percent"></i></td>
                    <td ><i className="fa-regular fa-dollar-sign"></i>{pd.market_cap}</td>
                    <td ><i className="fa-regular fa-dollar-sign"></i>{pd.total_volume}</td>
                    <td >{pd.circulating_supply}</td>
                    <td style={{ paddingRight: "10px" }}><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                </tr>

            )
            else return (

                <tr>
                    <td style={{ paddingRight: "5px" }}><i className="fa fa-star-o"  aria-hidden="true"></i></td>
                    <td>
                        <Modal line={<text className="val1"><img src={pd.image} style={{ height: "24px", width: "24px" }} /> {pd.name}  <span style={{ fontSize: "12px", fontWeight: "500", color: "gray" }}>{pd.symbol.toUpperCase()}</span></text>}
                            name={pd.name}
                            photo={<img src={pd.image} style={{ height: "24px", width: "24px", marginRight: "10px" }} />}
                            cap={pd.market_cap}
                            vol={pd.total_volume}
                            supply={pd.circulating_supply}
                            price={pd.current_price}
                            h={pd.price_change_percentage_24h.toFixed(2)}
                            d={pd.price_change_percentage_7d_in_currency.toFixed(2)}
                            code={pd.symbol.toUpperCase()}
                        />
                    </td>
                    <td className="val1"><i className="fa-regular fa-dollar-sign"></i>{pd.current_price}</td>
                    <td className="val1" style={{ color: x > 0 ? "rgb(114, 180, 14)" : "crimson" }}><i className={x > 0 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i> {pd.price_change_percentage_24h.toFixed(2)}<i className="fa-light fa-percent"></i></td>
                </tr>

            )

        })

        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))
        console.log(data);

    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        getData()
    }, [offset])

    useEffect(() => {
        getData()
    }, [width])





    const settings={
        previousLabel:"<",
        nextLabel:">",
        breakLabel:"...",
        breakclassName:"break-me",
        pageCount:{pageCount},
        marginPagesDisplayed:2,
        pageRangeDisplayed:2,
        onPageChange:{handlePageClick},
        containerClassName:"pagination",
        subContainerClassName:"pages pagination",
        activeClassName:"active"       

    }    

    return (
        <>
            {width > 1200 ?
                <div className="page">
                    <text className='page-heading'>Top 100 Cryptocurrencies by Market Cap</text>
                    <div className='btn-menu' style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
                        <div className='buttons' style={{ display: "flex" }}>
                            <button className='page-btn' style={{ width: "90px", height: "32px" }}><text className='btn-text' ><i className="fa fa-star-o" aria-hidden="true"></i> Favourites</text></button>
                            <button className='page-btn' style={{ width: "110px", height: "32px" }}><text className='btn-text' style={{ color: "#3861FB" }}>Cryptocurrencies</text></button>
                            <button className='page-btn' style={{ width: "40px", height: "32px" }}><text className='btn-text'>DeFi</text></button>
                            <button className='page-btn' style={{ width: "120px", height: "32px" }}><text className='btn-text'>NFTs & Collectibles</text></button>
                        </div>
                        <div className='page-controller' style={{ display: "flex" }}>
                            <label style={{ marginRight: "10px", fontSize: "12px", color: "#5B667C", marginTop: "8px" }}>Show rows</label>
                            <input type="number" id='rows'  style={{ width: "40px", borderRadius: "7px", paddingLeft: "10px", backgroundColor: "#E5E5E5" }}  />
                        </div>
                    </div>
                    <hr style={{ marginTop: "20px", marginBottom: "0px" }}></hr>

                    <div style={{ display: "flex" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>PRICE</th>
                                    <th>24H <i className="fa-solid fa-arrow-down"></i></th>
                                    <th>7D</th>
                                    <th>MARKET CAP</th>
                                    <th>VOLUME(24H)</th>
                                    <th>Circulating SUPPLY</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>{data}</tbody>
                        </table>
                    </div>


                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakclassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        style={{ float: "right" }} />
                </div>
                :
                <div className='mobilePage'>
                    <div style={{ maxWidth: "400px", marginLeft: "auto", marginRight: "auto", minWidth: "300px", marginTop: "30px" }}>
                        <text style={{ fontWeight: "600", lineHeight: "24px", fontSize: "20px", marginTop: "40px" }} className='page-heading'>Top 100 Cryptocurrencies by Market Cap</text>
                        <div style={{ display: "flex", marginTop: "30px" }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: "20px" }}></th>
                                        <th style={{ maxWidth: "180px" }}>NAME</th>
                                        <th>PRICE</th>
                                        <th>24H <i className="fa-solid fa-arrow-down"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data}
                                </tbody>
                            </table>
                        </div>


                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakclassName={"break-me"}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeclassName={"active"}
                        
                            style={{ float: "center" }} 
                            />
                    </div>
                </div>
            }
        </>
    );
}

export default Pages;
