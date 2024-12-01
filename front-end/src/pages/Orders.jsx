import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const navigate = useNavigate();

  // Temporary orders data (you might pull this dynamically later)
  const orders = products.slice(1, 4).map((item, index) => ({
    id: item._id,
    name: item.name,
    image: item.image[0],
    price: item.price,
    quantity: 1,
    size: 'M',
    date: new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
    status: 'Ready to Ship', // Added order status
  }));

  return (
    <div className="border-t pt-16 px-4 sm:px-10">
      {/* Title */}
      <div className="text-3xl font-semibold mb-8">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders List */}
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              {/* Product Info */}
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-20 sm:w-28 rounded-lg object-cover"
                  src={order.image}
                  alt={order.name}
                />
                <div>
                  <p className="text-lg font-medium text-gray-800">{order.name}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">{currency.symbol}{order.price}</span>
                    </p>
                    <p className="sm:ml-4">
                      Quantity: <span className="font-semibold">{order.quantity}</span>
                    </p>
                    <p className="sm:ml-4">
                      Size: <span className="font-semibold">{order.size}</span>
                    </p>
                  </div>
                  <p className="mt-2 text-sm">
                    Date: <span className="text-gray-500">{order.date}</span>
                  </p>
                  {/* Order Status */}
                  <p className="mt-2 text-sm font-medium text-green-600">
                    {order.status}
                  </p>
                </div>
              </div>

              {/* Track Order Button */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate(`/order/track/${order.id}`)} // Navigate to track order page
                  className="text-gray-600 bg-white border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-100 hover:text-gray-800 transition"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">You have no orders yet.</p>
      )}
    </div>
  );
};

export default Orders;
