import { ProductCard as ProdcutCardHOC } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImages";
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImages";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProdcutCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;
