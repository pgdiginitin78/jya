import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
const InputField = ({
  sx,
  ref,
  focused,
  variant,
  defaultValue,
  inputProps,
  type,
  disabled,
  inputRef,
  name,
  label,
  error,
  onKeyDown,
  control,
  color,
  shrink,
  InputLabelProps,
  tableInputField,
  accept,
  id,
  minRows,
  maxRows,
  multiline,
  onPaste,
  InputProps,
  ...rest
}) => {
  //  onPaste={(e) => e.preventDefault()}
  return (
    <FormControl fullWidth size="small" sx={sx}>
      <Controller
        render={({ field }) => {
          return (
            <TextField
              className={
                tableInputField
                  ? " text-[12px] bg-white"
                  : "text-[14px] bg-white"
              }
              id={id}
              inputRef={inputRef}
              ref={ref ? ref : null}
              autoComplete="off"
              onKeyDown={onKeyDown}
              InputProps={{
                ...InputProps,
                disabled: disabled,
              }}
              helperText={error?.message}
              onPaste={onPaste}
              minRows={minRows}
              maxRows={maxRows}
              multiline={multiline}
              accept={accept}
              InputLabelProps={InputLabelProps}
              inputProps={
                // dontCapitalize
                //   ?
                (inputProps,
                {
                  style: {
                    fontSize: tableInputField ? "12px" : "14px",
                    height: tableInputField ? "10px" : "20px",
                  },
                })

                // : (inputProps,
                //   {
                //     style: {
                //       textTransform: "capitalize",
                //       fontSize: tableInputField ? "12px" : "14px",
                //       height: tableInputField ? "10px" : "18.5px",
                //     },
                //   })
              }
              sx={{
                "& .MuiFormLabel-root": {
                  fontSize: tableInputField ? "12px" : "14px",
                  ...(shrink
                    ? {}
                    : {
                        position: "absolute",
                        top: "1px",
                      }),
                },
              }}
              autoFocus={focused ? true : false}
              onWheel={(e) => {
                if (type === "number") {
                  e.target.blur();
                }
              }}
              type={type}
              disabled={disabled}
              error={!!error?.message}
              color={color}
              variant={variant}
              label={label}
              placeholder={label}
              name={name}
              fullWidth
              {...field}
              onChange={(e) => {
                field.onChange(e); // Notify react-hook-form
                if (rest.onChange) {
                  rest.onChange(e); // Notify custom handler
                }
              }}
              size="small"
            />
          );
        }}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};

export default InputField;
