import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardInfo = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default CardInfo;