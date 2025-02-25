import Fruits1 from "../../assets/fruits/fruits1.webp";
import Fruits2 from "../../assets/fruits/fruits2.png";
import Fruits3 from "../../assets/fruits/fruits3.png";

const ServicesData = [
  {
    id: 1,
    image: Fruits1,
    title: "Fresh Fruits",
    description:
      "Fresh fruits are always available at our store. ",
    aosDelay: "300",
  },
  {
    id: 2,
    image: Fruits2,
    title: "Orange Juice",
    description:
      "We have fresh orange juice available at our store.",
    aosDelay: "500",
  },
  {
    id: 3,
    image: Fruits3,
    title: "Orange",
    description:
      "Fresh oranges are always available at our store.",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center  max-w-lg mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-dark">
          Fresh and <span>Tasty Fruits</span>{" "}
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
          necessitatibus cum repellendus unde mollitia, fugit dicta animi
          commodi? Accusamus, quisquam.
        </p>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {ServicesData.map(({id, image, title, description, aosDelay}) => (
          <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className="p-4 text-center space-y-6">
            <img
              src={image}
              alt=""
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">{title}</h1>
              <p className="text-dark">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
