import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { getData } from "../../component/Helper/Axios/fetchProductList";
import { DataType } from "../../component/Type/ProductType";
import { ProductDetailComponent } from "../../component/ProductDetail/ProductDetail";
import { Comment } from "../../component/ProductDetail/Comment";
import Collection4D from "../../component/model/ProductList/4D";
import connectDB from "../../component/Helper/ConnectDB";
const Collection4dDetail = ({
  Collection4Ddetail,
  Collection4dId,
}: {
  Collection4Ddetail: DataType;
  Collection4dId: string;
}) => {
  return (
    <div>
      <ProductDetailComponent Product={Collection4Ddetail} />
      <Comment Collection4dId={Collection4dId} />
    </div>
  );
};
export default Collection4dDetail;
// export const getStaticPaths: GetStaticPaths = async () => {
//   await connectDB();
//   const datas = await Collection4D.find();
//   const data = JSON.parse(JSON.stringify(datas));
//   const paths = data.map((detail: DataType) => {
//     return {
//       params: {
//         Collection4dId: detail._id.toString(),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  await connectDB();
  const { Collection4dId } = context.params;
  const Collection4Đetail = await Collection4D.findById(Collection4dId);
  const Collection4Ddetail = JSON.parse(JSON.stringify(Collection4Đetail));
  return {
    props: {
      Collection4Ddetail,
      Collection4dId,
    },
  };
};
