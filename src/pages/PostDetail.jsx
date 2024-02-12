import React from 'react';
import Layout from '../components/Layout';
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';

function PostDetail() {
    const [views, setViews] = useState(false)
    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <Layout>
            <div className="detail__container">
                <div className="detail__content__left">
                    <div className="detail__content__left__slider">
                        <Carousel
                            data={data}
                            time={2000}
                            width="850px"
                            height="500px"
                            captionStyle={captionStyle}
                            radius="10px"
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="bottom"
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            thumbnails={true}
                            thumbnailWidth="100px"
                            style={{
                                textAlign: "center",
                                maxWidth: "850px",
                                maxHeight: "500px",
                                margin: "0px auto",
                            }}
                        />
                    </div>
                    <div className="detail__content__texts">
                        <h2>Uy haqida</h2>
                        <div className="detail__texts">
                            <div className="detail__texts__left">
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                            </div>
                            <div className="detail__texts__left">
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                                <div className="detail__item">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E3QThBOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDYgMmMuMDY4LS42NDYuNjU1LTEuMTA5IDEuMjgyLS45NzhsNS44NDYuNTM2Yy41MDQuMTA2Ljg2Ni41NjcuODY2IDEuMTAzdjEwLjkyM2MwIC41MzYtLjM2Mi45OTgtLjg2NiAxLjEwM2wtNS44NDYuODEzYy0uNjY2LjE0LTEuMjg4LS4zOTMtMS4yODgtMS4xMDNWNGgtLjg0MmEuMTU4LjE1OCAwIDAgMC0uMTU4LjE1OHY5LjM2NGExIDEgMCAwIDEtMiAwVjRhMiAyIDAgMCAxIDItMmgxLjAwNnptMi41MzUgNy4wMjJjLjQ1NyAwIC44MjgtLjQ0OC44MjgtMXMtLjM3LTEtLjgyOC0xYy0uNDU3IDAtLjgyOC40NDgtLjgyOCAxcy4zNyAxIC44MjggMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" /> Комнат <div className="border__bottom"></div> 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail__content__right">
                    <div className="detail__content__right__top">
                        <p>Продаётся 3-комн. квартира, 56 м²</p>
                        <h2 className="detail__price">15 500 000 </h2>
                    </div>
                    <div className="detail__content__right__center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkeXo88SukOvYWTP5LBgDwlcovbbLfgr51A&usqp=CAU" alt="" />
                        <p>Safarov Javohir</p>
                    </div>
                    <div className="detail__content__right__bottom">
                        <button onClick={() => setViews(true)}>{views ? '+998 (33) 299-77-07' :  "Telefon raqam"}</button>
                        <button><FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PostDetail;