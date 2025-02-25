import Worldmap from "../../assets/world-map.png";

const WhereToBuy = () => {
  return (
    <>
      <div className="container my-36 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {/* text-content-section */}
          <div className="space-y-8">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl font-bold text-dark font-serif"
            >
              Where to buy our products?
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full lg:w-[120px]"
              />
              <input
                type="text"
                placeholder="Zipcode"
                className="input-style w-full"
              />
            </div>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-btn"
            >
              Search
            </button>
          </div>
          {/* Map section */}
          <div data-aos="fade"className="col-span-2">
            <img src={Worldmap} alt="" className="w-full sm:w-[500px] mx-a" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToBuy;
