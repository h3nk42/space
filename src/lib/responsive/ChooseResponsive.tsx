import React, { ReactElement } from "react";
import { Media } from "./Media";
import { BREAKPOINTNAME } from "../../theme/Breakpoints";

type ChooseResponsiveProps = {
  defaultComponent: ReactElement;
  breakpointComponents: {
    [BREAKPOINTNAME.sm]?: ReactElement;
    [BREAKPOINTNAME.md]?: ReactElement;
    [BREAKPOINTNAME.lg]?: ReactElement;
    [BREAKPOINTNAME.xl]?: ReactElement;
  };
};

export const ChooseResponsive: React.FC<ChooseResponsiveProps> = (props) => {
  const { breakpointComponents, defaultComponent } = props;

  return (
    <>
      <Media between={[BREAKPOINTNAME.sm, BREAKPOINTNAME.md]}>
        {breakpointComponents[BREAKPOINTNAME.sm] || defaultComponent}
      </Media>
      <Media between={[BREAKPOINTNAME.md, BREAKPOINTNAME.lg]}>
        {breakpointComponents[BREAKPOINTNAME.md] || defaultComponent}
      </Media>
      <Media between={[BREAKPOINTNAME.lg, BREAKPOINTNAME.xl]}>
        {breakpointComponents[BREAKPOINTNAME.lg] || defaultComponent}
      </Media>
      <Media greaterThanOrEqual={BREAKPOINTNAME.xl}>
        {breakpointComponents[BREAKPOINTNAME.xl] || defaultComponent}
      </Media>
    </>
  );
};
