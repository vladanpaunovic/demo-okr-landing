import Image from "next/image";
import DateFormatter from "./DateFormatter";

type Props = {
  name: string;
  picture: string;
  date: string;
};

const Avatar = ({ name, picture, date }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="w-10 h-10 rounded-full mr-3"
        alt={name}
        width={40}
        height={40}
      />
      <div>
        <div className="mb-1 text-sm font-semibold">{name}</div>
        <div className="mb-2 text-xs text-gray-500">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
