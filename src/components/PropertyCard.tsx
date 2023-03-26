import Image from "next/image";
import { TProperty } from "@/types";
import { BiMap } from "react-icons/bi";

type PropertyCardProps = {
    post: TProperty;
};

const PropertyCard = ({ post }: PropertyCardProps) => {
    return (
        <article className="relative w-full h-[380px] cursor-pointer">
            <Image
                className="object-cover w-full h-[350px]"
                src={post.image.url}
                alt={`${post.title} image`}
                width={350}
                height={350}
            />
            <div className="absolute bottom-0 left-[50%] ml-[-145px] p-5 bg-lugar-white w-[290px] shadow-lugar">
                <h3 className="text-lugar-dark text-sm leading-[16.8px] font-bold">
                    {post.title}
                </h3>
                <span className="flex flex-row items-center">
                    <BiMap size={10} />
                    <p className="text-lugar-dark text-xs leading-3 font-normal">
                        {post.addressLine1}, {post.addressLine2}, {post.city} {post.province} {post.postcode}
                    </p>
                </span>
            </div>
        </article>
    );
};

export default PropertyCard;