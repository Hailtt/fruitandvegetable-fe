import React from "react";
import Banner1 from "../../img/banner1.jpg";
import Banner2 from "../../img/banner2.jpg";

function Banner() {
	return (
		<div className="th-banner th-container">
			<div className="container">
				<div className="box">
					<img className="background" alt="banner-img" src={Banner1} />
					<div className="info">
						<h1 className="title">Trái Cây Tươi & Sạch</h1>
						<p className="description">Đem Trái Cây Tươi cho mọi nhà.</p>
						<button className="btn">Đặt hàng ngay </button>
					</div>
				</div>
				<div className="box">
					<img className="background" alt="banner-img" src={Banner2} />
					<div className="info cl-white">
						<h1 className="title">Rau Tươi & Sạch</h1>
						<p className="description">Đem rau sạch cho mọi nhà.</p>
						<button className="btn">Đặt hàng ngay </button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
