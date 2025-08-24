import React, { HTMLAttributes } from "react";
import {
  getResponsiveClasses,
  ResponsiveValue,
} from "../../lib/responsive-helper";

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
} as const;

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
} as const;

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: ResponsiveValue<number>;
  rows?: ResponsiveValue<number>;
  gap?: ResponsiveValue<number>;
  justify?: ResponsiveValue<keyof typeof justifyClasses>;
  align?: ResponsiveValue<keyof typeof alignClasses>;
}

const Grid: React.FC<GridProps> = ({
  children,
  columns = 1,
  rows,
  gap = 0,
  justify = "start",
  align = "stretch",
  className = "",
  ...rest
}) => {
  const classes = [
    "grid",
    columns && getResponsiveClasses(columns, undefined, "grid-cols-"),
    rows && getResponsiveClasses(rows, undefined, "grid-rows-"),
    getResponsiveClasses(gap, undefined, "gap-"),
    getResponsiveClasses(justify, justifyClasses),
    getResponsiveClasses(align, alignClasses),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
