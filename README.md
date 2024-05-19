Cài đặt npm install prop-types
để dùng PropTypes kiểm tra thay vì typescript

Doc hướng dẫn làm pagination và search của nextjs:
https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

Hook debounce
npm i use-debounce


React image gallery
link: https://www.npmjs.com/package/react-image-gallery

Nếu tìm nạp import không được thì xóa và cài lại node bằng lệnh:
rm -rf node_modules
npm install  # hoặc yarn install nếu bạn dùng Yarn




struture of project



Nhấn chọn dịch vụ => hiện modal thêm dịch vụ đã chọn => chuyển đến component chứa thông tin dịch vụ đã đặt(dịch vụ đã đặt, tổng số tiền, )
case1: Nếu không chọn thêm dịch vụ => chọn date và time => submit
case2: Nếu chọn thêm dịch vụ khác => Mở modal tất cả trang dịch vụ (thanh tìm kiếm dịch vụ, show all dịch vụ) => chọn thêm dịch vụ khác


Chức năng thêm vào giỏ hàng demo:
Để thực hiện yêu cầu này, bạn cần:

Tạo một context hoặc state để lưu trữ giỏ hàng.
Viết hàm handleClick để thêm sản phẩm vào giỏ hàng khi nút "chọn" được nhấn.
Hiển thị giỏ hàng với các sản phẩm đã thêm cùng với giá của chúng.
Dưới đây là một ví dụ chi tiết sử dụng React Context để quản lý giỏ hàng.

Step 1: Tạo Context để Quản lý Giỏ hàng
javascript
Copy code
// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
Step 2: Tạo Component Sản phẩm và Thêm vào Giỏ hàng
javascript
Copy code
import React from 'react';
import { useCart } from './CartContext';

const Item = ({ title, price }) => {
  const { addToCart } = useCart();

  const handleClick = (event) => {
    const itemDiv = event.target.closest('.item');
    const title = itemDiv.querySelector('.item-title').textContent;
    const price = itemDiv.querySelector('.item-price').textContent;

    addToCart({ title, price });
  };

  return (
    <div className="item">
      <h3 className="item-title">{title}</h3>
      <p className="item-price">{price}</p>
      <button onClick={handleClick}>Chọn</button>
    </div>
  );
};

const App = () => {
  const items = [
    { id: 1, title: 'Item 1', price: '100000' },
    { id: 2, title: 'Item 2', price: '200000' },
    { id: 3, title: 'Item 3', price: '300000' },
  ];

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} title={item.title} price={item.price} />
      ))}
    </div>
  );
};

export default App;
Step 3: Hiển thị Giỏ hàng
javascript
Copy code
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
Step 4: Sử dụng CartProvider để Bọc Ứng dụng
javascript
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './Cart';
import { CartProvider } from './CartContext';

const Root = () => (
  <CartProvider>
    <App />
    <Cart />
  </CartProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
Giải thích
CartContext.js: Tạo một context để quản lý giỏ hàng và một hook useCart để truy cập giỏ hàng và hàm thêm sản phẩm vào giỏ hàng.
Item Component: Khi nút "chọn" được nhấn, thông tin sản phẩm (tiêu đề và giá) được lấy từ div chứa sản phẩm và thêm vào giỏ hàng bằng cách gọi hàm addToCart.
Cart Component: Hiển thị danh sách sản phẩm trong giỏ hàng.
Root Component: Bọc toàn bộ ứng dụng bằng CartProvider để giỏ hàng có thể được truy cập từ bất kỳ component nào trong ứng dụng.
Với cách này, khi bạn click vào nút "chọn" của một sản phẩm, sản phẩm đó sẽ được thêm vào giỏ hàng và giỏ hàng sẽ hiển thị các sản phẩm đã thêm cùng với giá của chúng.