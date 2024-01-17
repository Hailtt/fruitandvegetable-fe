import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import { LIST_PRODUCTS } from "./constant";
import { map, isEmpty } from "lodash";
import { RightOutlined } from "@ant-design/icons";
function Newproductlide() {
  return (
    <div className="th-newproductslide th-container">
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        // modules={[Autoplay]}
        // loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          waitForTransition: true,
        }}
        className="swiper"
      >
        {map(LIST_PRODUCTS, (it, idx) => (
          <SwiperSlide key={idx}>
            <div className="card">
              <div className="thumbnail">
                <a className="link" href="/">
                  <img
                    src={!isEmpty(it.image) ? it.image : ""}
                    className="image"
                  />
                </a>
              </div>
              <div className="content">
                <div className="meta">
                  {it.tags.length > 1 ? (
                    <p className="tag">
                      {map(it.tags, (tag, idx) => {
                        if (idx === 0) {
                          return `${tag}`;
                        } else return ` & ${tag} `;
                      })}
                    </p>
                  ) : (
                    <p className="tag">{it.tags[0]}</p>
                  )}
                </div>
                <h2 className="name">{it.name}</h2>
                <div className="more">
                  <a href="/" className="link">
                    Đọc tiếp
                  </a>
                  <RightOutlined className="icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Newproductlide;
