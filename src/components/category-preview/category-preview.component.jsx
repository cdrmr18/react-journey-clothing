import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <Link to={`${title}`}>
        <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
      </Link>
    </h2>
    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
