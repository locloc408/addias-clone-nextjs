import React from "react";
import { makeStyles } from "@mui/styles";
import { useInView } from "react-intersection-observer";
import { AdvertiseTitle } from "./AdvertiseTitle";
import { Theme } from "@mui/system";
import { AdvertiseList } from "./advertisement";
import { Advertise } from "../Type/Advertise";
export const useStyle = makeStyles((theme: Theme) => ({
  advertise: {
    width: "100%",
    height: "300px",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "300px",
    },
    [theme.breakpoints.between("sm", "lg")]: {
      width: "300px",
      height: "300px",
    },
  },
}));
export const Advertises = ({ advertises }: { advertises: Advertise[] }) => {
  const classes = useStyle();
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <>
      <div ref={ref}>
        <AdvertiseTitle inView={inView} />
        <AdvertiseList
          advertises={advertises}
          inView={inView}
          classes={classes}
        />
      </div>
    </>
  );
};
