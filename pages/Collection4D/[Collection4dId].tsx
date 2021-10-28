import { GetStaticPaths, GetStaticProps } from "next";
import { getData } from "../../component/Helper/Axios/fetchProductList";
import { DataType } from "../../component/Type/ProductType";
import { ProductDetailComponent } from "../../component/ProductDetail/ProductDetail";
import { Comment } from "../../component/ProductDetail/Comment";
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
export const getStaticPaths: GetStaticPaths = async () => {
  const data: DataType[] = await getData.get4D();
  const paths = data.map((detail: DataType) => {
    return {
      params: {
        Collection4dId: detail._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { Collection4dId } = context.params;
  const Collection4Ddetail = await getData.get4Ddetail(Collection4dId);
  return {
    props: {
      Collection4Ddetail,
      Collection4dId,
    },
  };
};
