import cn from "@/helpers/cn";
import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import { forwardRef } from "react";

const IconButton = forwardRef(
  (
    { size = "small", color = "primary", ...props }: IconButtonProps,
    ref: any
  ) => {
    return (
      <MuiIconButton
        disableRipple
        size={size}
        color={color}
        classes={{
          root: cn(
            "text-black border relative py-0 px-1 border rounded-sm p-0 h-fit transition-all",
            "shadow-[0_0_0_0px_rgba(0,0,0)] hover:shadow-[4px_4px_0_0px_rgba(0,0,0)] focus:shadow-[4px_4px_0_0px_rgba(0,0,0)]"
          ),
          sizeSmall: "p-2 [&>svg]:text-lg",
          sizeMedium: "p-3 [&>svg]:text-lg",
          sizeLarge: "p-4 [&>svg]:text-xl",
          colorPrimary: cn("bg-purple-500 text-white"),
          colorError: cn("bg-red-500 text-white"),
        }}
        {...props}
        ref={ref}
      />
    );
  }
);

IconButton.displayName = "IconButton";
export default IconButton;
