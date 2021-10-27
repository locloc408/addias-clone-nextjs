import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Controller, useController, UseControllerProps } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import StarRateComponent from "react-rating-stars-component";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Commentform } from "../ProductDetail/Comment";
export const TextInput = ({ control, name, errors, label, type }) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{
          required: `Vui Lòng Điền ${label} Của Bạn `,
        }}
        render={({ field }) => (
          <TextField
            sx={{
              width: {
                lg: "400px",
                xs: "100%",
              },
              marginTop: "20px",
            }}
            label={label}
            variant="outlined"
            value={field.value}
            onChange={(e) => field.onChange(e)}
            type={type}
          />
        )}
      />
      <ErrorMessage
        errors={errors ? errors : null}
        name={name}
        render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
      />
    </>
  );
};
export const StarRating = (props: UseControllerProps<Commentform>) => {
  const {
    field: { onChange, value },
  } = useController(props);

  return (
    <StarRateComponent
      size={32}
      emptyIcon={<StarBorderIcon />}
      onChange={(e) => {
        onChange(e);
      }}
    />
  );
};
