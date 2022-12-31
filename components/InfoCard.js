import Image from "next/image";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

function InfoCard({ item }) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={item.img} fill alt="banner" className="objectFit-cover rounded-xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{item.location}</p>
          <AiOutlineHeart className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{item.title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {item.descripton}
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <AiFillStar className="h-5 text-red-400" /> {item.star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              {item.price}
            </p>
            <p className="text-right font-extralight">{item.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
