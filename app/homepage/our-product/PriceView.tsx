import React from "react";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
  label?: string;
}

const PriceView = ({ price, discount, className, label }: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <PriceFormatter amount={price} />
        <PriceFormatter amount={price + (discount * price) / 100} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default PriceView;
