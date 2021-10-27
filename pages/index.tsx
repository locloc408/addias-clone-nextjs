import { GetStaticProps } from "next";
import { Navbar } from "../component/Navbar/Navbar";
import { DataType } from "../component/Type/ProductType";
import { getData } from "../component/Helper/Axios/fetchProductList";
import { Advertise } from "../component/Type/Advertise";
import ProductListPage from "./productsList";
import { Advertises } from "../component/Advertises/AdvertiseList";
import { FirstHero } from "../component/FirstHero/firstHero";
import Collection4DPage from "../component/ProductList/4D";
import { ContainerTeaser } from "../component/ContainerTeaser/ContainerTeaser";
import axios from "axios";
const HomePage = ({
  ProductList,
  Advertisement,
  Collection4d,
}: {
  ProductList: DataType[];
  Advertisement: Advertise[];
  Collection4d: DataType[];
}) => {
  return (
    <div>
      <FirstHero />
      <Advertises advertises={Advertisement} />
      <ProductListPage ProductList={ProductList} />
      <ContainerTeaser />
      <Collection4DPage Collection4d={Collection4d} />
    </div>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const ProductList = await getData.getProducts();
  const Advertisement = await getData.getAdvertisement();
  const Collection4d = await getData.get4D();
  return {
    props: {
      ProductList,
      Advertisement,
      Collection4d,
    },
  };
};
