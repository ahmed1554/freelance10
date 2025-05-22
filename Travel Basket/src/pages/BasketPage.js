import React, { useState } from "react";
import { useBasket } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";

/**
 * BasketPage Component
 *
 * API Integration Notes:
 * - To integrate with real backend, replace the mock functions with:
 *   - POST /api/basket/add - Add item to basket
 *   - DELETE /api/basket/{id} - Remove item from basket
 *   - POST /api/basket/checkout - Confirm reservation
 *
 * Example API call:
 * const handleConfirm = async () => {
 *   try {
 *     const response = await fetch('/api/basket/checkout', {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify({ items: basket })
 *     });
 *     if (response.ok) {
 *       clearBasket();
 *       navigate("/basket/confirmation");
 *     }
 *   } catch (error) {
 *     console.error('Checkout failed:', error);
 *   }
 * };
 */

const BasketPage = () => {
  const { basket, removeFromBasket, clearBasket, addToBasket } = useBasket();
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({ destination: "", price: "" });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.destination && newItem.price) {
      addToBasket({
        id: Date.now(),
        destination: newItem.destination,
        price: Number(newItem.price),
      });
      setNewItem({ destination: "", price: "" });
    }
  };

  const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

  const handleConfirm = () => {
    // For now, just clear the basket and navigate to confirmation
    clearBasket();
    navigate("/basket/confirmation");
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Your Travel Basket</h1>

      {/* Add Item Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title h4 mb-3">Add New Destination</h2>
          <form onSubmit={handleAddItem}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Destination"
                  value={newItem.destination}
                  onChange={(e) =>
                    setNewItem((prev) => ({
                      ...prev,
                      destination: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={newItem.price}
                  onChange={(e) =>
                    setNewItem((prev) => ({ ...prev, price: e.target.value }))
                  }
                />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary w-100">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {basket.length === 0 ? (
        <div className="alert alert-info text-center">
          Your basket is empty.
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Destination</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {basket.map((item) => (
                  <tr key={item.id}>
                    <td>{item.destination}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => removeFromBasket(item.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3 className="mb-0">Total: ${totalPrice}</h3>
            <button onClick={handleConfirm} className="btn btn-success btn-lg">
              Confirm Reservation
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketPage;
