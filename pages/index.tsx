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
import connectDB from "../component/Helper/ConnectDB";
import Adidas from "../component/model/ProductList/Adidas";
import AdvertisesList from "../component/model/Advertises/Advertises";
import collect4d from "../component/model/ProductList/4D";
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
HomePage.displayName = "HomePage";
export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  await connectDB();
  const AdidasList = await Adidas.find();
  const ProductList = JSON.parse(JSON.stringify(AdidasList));
  const Advertiselist = await AdvertisesList.find();
  const Advertisement = JSON.parse(JSON.stringify(Advertiselist));
  const Collection4dList = await collect4d.find();
  const Collection4d = JSON.parse(JSON.stringify(Collection4dList));
  return {
    props: {
      ProductList,
      Advertisement,
      Collection4d,
    },
  };
};
