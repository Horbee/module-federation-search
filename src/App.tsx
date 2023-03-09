import FeaturedProducts from "./components/shared/FeaturedProducts";

export const App = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Hello World</h1>
        <p className="subtitle">
          Search App with <strong>Bulma</strong>!
        </p>

        <FeaturedProducts />
      </div>
    </section>
  );
};
