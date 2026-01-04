import Tilt from "react-parallax-tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeed={300}
      glareEnable={false}
      className="w-full bg-tertiary p-[1px] rounded-[20px]"
    >
      <div className="rounded-[20px] py-5 px-12 min-h-[280px] 
        flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
