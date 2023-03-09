import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type FeaturedProductsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default function FeaturedProducts(props: FeaturedProductsProps) {
  return (
    <div {...props}>
      <h4 className="title is-4">Check out our featured products</h4>
      <div className="columns">
        <div className="column">
          <FeaturedProductCard
            name="Car"
            img="https://mf-search-app.netlify.app/car.jpeg"
          />
        </div>
        <div className="column">
          <FeaturedProductCard
            name="Flowers"
            img="https://mf-search-app.netlify.app/flower.jpeg"
          />
        </div>
        <div className="column">
          <FeaturedProductCard
            name="Phone"
            img="https://mf-search-app.netlify.app/phone.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

type FeaturedProductCardProps = {
  name: string;
  img: string;
};

export const FeaturedProductCard = ({
  name,
  img,
}: FeaturedProductCardProps) => {
  return (
    <div className="card" style={{ cursor: "pointer" }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt="Product" />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{name}</p>
      </div>
    </div>
  );
};
