import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
export const RadioGroups = ({ control, errors }) => {
  return (
    <>
      <Controller
        control={control}
        name="gender"
        rules={{ required: "Giới Tính Của Bạn Đang Bị Trống" }}
        render={({ field }) => (
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={field.value}
            onChange={(e) => field.onChange(e)}
          >
            <div style={{ display: "flex" }}>
              <FormControlLabel value="female" control={<Radio />} label="Nữ" />
              <FormControlLabel value="male" control={<Radio />} label="Nam" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Khác"
              />
            </div>
          </RadioGroup>
        )}
      />
      <ErrorMessage
        errors={errors ? errors : null}
        name="gender"
        render={({ message }) => (
          <Typography sx={{ color: "red", marginTop: "10px" }}>
            {message}
          </Typography>
        )}
      />
    </>
  );
};
