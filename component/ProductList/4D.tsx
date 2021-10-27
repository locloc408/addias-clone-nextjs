import { DataType } from "../Type/ProductType";
import axios from "axios";
import useSWRInfinite from "swr/infinite";
import { getData } from "../Helper/Axios/fetchProductList";
import { useCallback, useEffect, useState } from "react";
import { Grid, Button, CardMedia, Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../redux/store/hook";
import { setCollection4dList } from "../../redux/slice/Collection4D";
import { LinkStyle } from "../Navbar/navbarStyle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Scroll from "react-scroll";
export default function Collection4DPage({
  Collection4d,
}: {
  Collection4d: DataType[];
}) {
  // We can now calculate the number of all user
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const dispatch = useAppDispatch();
  const [listPerPage, setListPerPage] = useState<number>(4);
  const collection = useCallback(() => {
    const load = Collection4d.slice(0, listPerPage);

    return load;
  }, [listPerPage]);
  useEffect(() => {
    dispatch(setCollection4dList(Collection4d));
  }, []);
  return (
    <div ref={ref} style={{ marginTop: "100px" }}>
      <motion.div
        initial={{ x: "-200vh", opacity: 0 }}
        animate={inView ? { y: 0, x: 0, opacity: 1 } : ""}
        transition={{
          duration: 0.25,
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 500,
            display: "flex",
            justifyContent: "center",
          }}
        >
          4D
        </Typography>
        <Grid container>
          {collection()?.map((lists: DataType) => {
            return (
              <Grid key={lists._id.toString()} lg={3} sm={6} xs={6} item>
                <LinkStyle href={`/Collection4D/${lists._id}`}>
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
                      image={`${lists.img}`}
                      style={{ height: "300px", width: "100%" }}
                    ></CardMedia>
                    <Typography variant="h5">{lists.title}</Typography>
                    <Typography>{lists.type}</Typography>
                  </Box>
                </LinkStyle>
              </Grid>
            );
          })}
        </Grid>
        {listPerPage < 9 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                backgroundColor: "rgb(99, 93, 255)",
                color: "white",
                "&:hover": {
                  backgroundColor: "#804AE8",
                },
              }}
              disabled={listPerPage === 8 ? true : false}
              onClick={() => {
                setListPerPage(listPerPage + 4);
                const scroll = Scroll.animateScroll;
                scroll.scrollMore(380, { duration: 500 });
              }}
            >
              load more
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
