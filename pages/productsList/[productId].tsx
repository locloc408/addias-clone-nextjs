import { GetStaticPaths, GetStaticProps } from "next";
import { DataType } from "../../component/Type/ProductType";
import { getData } from "../../component/Helper/Axios/fetchProductList";
import { useAppDispatch } from "../../redux/store/hook";
import { useEffect } from "react";
import { getProductById } from "../../redux/slice/ProductList";
import { ProductDetailComponent } from "../../component/ProductDetail/ProductDetail";
import { Comment } from "../../component/ProductDetail/Comment";
import { ObjectId } from "mongoose";
const ProductDetail = ({
  Product,
  productId,
}: {
  Product: DataType;
  productId: ObjectId;
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductById(Product));
  }, [Product, dispatch]);
  if (!Product) {
    return <div>loading.............</div>;
  }
  return (
    <div>
      <ProductDetailComponent Product={Product} />
      {/* <ProductDesNavigation />
      <ProductDesItem /> */}
      <Comment Collection4dId={productId} />
    </div>
  );
};

ProductDetail.displayName = "ProductDetail";
export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: DataType[] = await getData.getProducts();
  const paths = data.map((data: DataType) => {
    return {
      params: {
        productId: data._id.toString(),
      },
    };
  });
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { productId } = context.params;
  const Product: DataType = await getData.getProductById(productId);
  return {
    props: {
      Product,
      productId,
    },
  };
};
