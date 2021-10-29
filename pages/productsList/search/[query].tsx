import { getData } from "../../../component/Helper/Axios/fetchProductList";
import { GetStaticPaths, GetStaticProps } from "next";
import { DataType } from "../../../component/Type/ProductType";
import { Grid, CardMedia, Typography, Box } from "@mui/material";
import { LinkStyle } from "../../../component/Navbar/navbarStyle";
import { useRouter } from "next/router";
import { search } from "../../../component/Navbar/DestopNav/SideMenu";
import Adidas from "../../../component/model/ProductList/Adidas";
import Collection4D from "../../../component/model/ProductList/4D";
import ConnectDB from "../../../component/Helper/ConnectDB";
const UltraboostPage = ({ data, type }: { data: DataType[]; type: string }) => {
  const router = useRouter();
  return (
    <Grid container>
      {data?.map((e) => {
        return (
          <Grid item key={e._id.toString()} lg={3} xs={12} sm={6}>
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={() => {
                router.push(`${process.env.NEXTAUTH_URL}/${type}/${e._id}`);
              }}
            >
              <Box
                sx={{
                  "&:hover": {
                    border: "1px solid black",
                    cursor: "pointer",
                  },
                  width: "98%",
                }}
              >
                <CardMedia
                  image={`${e.img}`}
                  style={{ height: "300px", width: "100%" }}
                ></CardMedia>
                <Typography variant="h5">{e.title}</Typography>
                <Typography>{e.type}</Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default UltraboostPage;
export const getStaticProps: GetStaticProps = async (context) => {
  await ConnectDB();
  if (context.params.query === "ultraBoost") {
    const datas = await Adidas.find();
    const data = JSON.parse(JSON.stringify(datas));
    return {
      props: {
        data,
        type: "productsList",
      },
    };
  }
  if (context.params.query === "fusio") {
    const datas = await Collection4D.find();
    const data = JSON.parse(JSON.stringify(datas));
    return {
      props: {
        data,
        type: "Collection4D",
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = search.map((e) => {
    return {
      params: {
        query: e.sorterTag,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
