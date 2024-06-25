import styled from 'styled-components';

export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

interface ProductProps {
  product: ProductInterface;
}

const CardContainer = styled.div`
  background-color: #393e46;
  box-shadow: 0 0 10px rgba(0, 173, 181, 0.5);
  border-radius: 8px;
  max-width: 450px;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  margin: 24px; // Added generous margin
`;

const ImageContainer = styled.div`
  height: 80%; // Increased height to 80%
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ContentContainer = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Product = ({ product }: ProductProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={product.images[0]} alt={`Product ${product.id}`} />
      </ImageContainer>
      <ContentContainer>
        <Title>{product.title}</Title>
        <Price>Price: ${product.price}</Price>
      </ContentContainer>
    </CardContainer>
  );
};