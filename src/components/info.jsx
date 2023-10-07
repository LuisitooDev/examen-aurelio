import React, { useState, useEffect } from 'react';

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container bg-dark text-white py-5">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card bg-dark text-white">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>
    </div>
  );
}

