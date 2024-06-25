'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Product, ProductInterface } from './components/Product';

export default function Home() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products to display per page
  const maxPossibleProducts = 33; // Maximum number of products available

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = (currentPage - 1) * productsPerPage;
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?limit=${productsPerPage}&offset=${offset}`, {
          headers: {
            'Accept': '*/*'
          }
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(maxPossibleProducts / productsPerPage);

  return (
    <div>
      <PageContainer>
        <h1>Product List</h1>
        <ProductContainer products={products} />
        <PaginationContainer>
          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => page >= currentPage - 2 && page <= currentPage + 2)
              .map((page) => (
                <PageButton
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={page === currentPage}
                  isActive={page === currentPage}
                >
                  {page}
                </PageButton>
              ))}
          </Pagination>
        </PaginationContainer>
      </PageContainer>
    </div>
  );
}

const PageContainer = styled.div`
  margin: 48px;
`;

const ParentContainer = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 173, 181, 0.3);
  border-radius: 8px;
  padding: 24px; // Increased padding
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  margin: 32px; // Added generous margin
`;

const ProductContainer = ({ products }: { products: ProductInterface[] }) => {
  return (
    <ParentContainer>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ParentContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Pagination = styled.div`
  background-color: #393e46;
  box-shadow: 0 0 10px rgba(0, 173, 181, 0.5);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
`;

interface PageButtonProps {
  isActive: boolean;
}

const PageButton = styled.button<PageButtonProps>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isActive ? '#00adb5' : '#ffffff')};
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
  margin: 0 8px;

  &:hover {
    color: #00adb5;
  }

  &:disabled {
    color: #888888;
    cursor: not-allowed;
  }
`;