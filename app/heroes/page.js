import { tokuHero } from "..//data/tokuhero";
import Image from "next/image";
const Heroes = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 mt-10 ps-10 gap-9">
                {tokuHero.map((item) => (
                    <div className="border border-black" key={item.id}>
                        <Image
                            src={item.image}
                            alt="Hero Image"
                            width={150}
                            height={200}
                            className="w-auto h-auto"
                        />
                        <div className=" ms-3 pt-3">
                        <p>Name : {item.name}</p>
                        <p>Type : {item.category}</p>
                        <p>Era : {item.Era}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Heroes;