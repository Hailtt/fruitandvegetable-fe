import { DownOutlined } from "@ant-design/icons";
export const MENU_BOTTOM = [
  {
    route: "/",
    label: "Trang Chủ",
  },
  {
    route: "/product",
    label: (
      <>
        Sản phẩm <DownOutlined className="icon" />
      </>
    ),
    subs: [
      {
        route: "/product/vegetable",
        label: "Rau củ quả",
      },
      {
        route: "/product/fruit",
        label: "Trái Cây",
      },
    ],
  },
  {
    route: "/contact",
    label: "Liên Hệ",
  },
  {
    route: "/manage",
    label: "quản lý",
  },
];
