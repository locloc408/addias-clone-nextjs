import { getData } from "../../../component/Helper/Axios/fetchProductList";
import { GetStaticPaths, GetStaticProps } from "next";
import { DataType } from "../../../component/Type/ProductType";
import { Grid, CardMedia, Typography, Box } from "@mui/material";
import { LinkStyle } from "../../../component/Navbar/navbarStyle";
import { useRouter } from "next/router";
import { search } from "../../../component/Navbar/DestopNav/SideMenu";
import { useCallback, useState, useEffect } from "react";
const UltraboostPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const GetDataBySearchTag = async () => {
      if (query === "ultraBoost") {
        const data = await getData.getProducts();
        setData(data);
      }
      if (query === "fusio") {
        const data = await getData.get4D();
        setData(data);
      }
    };
    GetDataBySearchTag();
  }, [query]);
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
                router.push(`/Collection4D/${e._id}`);
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
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      search,
    },
  };
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
