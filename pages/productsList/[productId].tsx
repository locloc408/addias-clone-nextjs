import { GetStaticPaths, GetStaticProps } from "next";
import { DataType } from "../../component/Type/ProductType";
import { getData } from "../../component/Helper/Axios/fetchProductList";
import { useAppDispatch } from "../../redux/store/hook";
import { useEffect } from "react";
import { getProductById } from "../../redux/slice/ProductList";
import { ProductDetailComponent } from "../../component/ProductDetail/ProductDetail";
import { Comment } from "../../component/ProductDetail/Comment";
import { ObjectId } from "mongoose";
import connectDB from "../../component/Helper/ConnectDB";
import Adidas from "../../component/model/ProductList/Adidas";
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
  await connectDB();
  const datas = await Adidas.find();
  const data: DataType[] = JSON.parse(JSON.stringify(datas));
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
  await connectDB();
  const { productId } = context.params;
  const ProductList = await Adidas.findById(productId);
  const Product: DataType = JSON.parse(JSON.stringify(ProductList));
  return {
    props: {
      Product,
      productId,
    },
  };
};
