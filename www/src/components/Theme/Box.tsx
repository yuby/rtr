import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space, SpaceProps,
  layout, LayoutProps,
  color, ColorProps,
  flexbox, FlexboxProps,
} from 'styled-system';

interface BoxBaseProps extends SpaceProps, LayoutProps, ColorProps, FlexboxProps {}

interface BoxProps extends BoxBaseProps {
  children?: ReactNode;
}

const Box = styled.div<BoxProps>`
  ${space};
  ${layout};
  ${color};
  ${flexbox};
`;

export default Box;
