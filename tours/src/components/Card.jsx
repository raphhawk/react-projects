import { useState } from "react";

const Card = ({ tours, setInterest }) => {
  const [para, setPara] = useState(false);
  return tours.map((t) => {
    return (
      <div key={t.id} className="border shadow-2xl w-1/2 h-1/2 my-20">
        <img
          src={t.image}
          alt="tours"
          className="object-cover object-top aspect-video"
        />
        <div className="flex flex-col p-4">
          <div className="flex flex-row">
            <h1 className="font-bold grow my-5">{t.name}</h1>
            <h1 className="font-bold text-cyan-600 bg-cyan-50 rounded-sm h-1/2 p-1">
              ${t.price}
            </h1>
          </div>
          <p>
            {para ? `${t.info}  ` : `${t.info.substring(0, 200)}...  `}
            <button
              className="text-cyan-500"
              type="button"
              onClick={() => {
                setPara(!para);
              }}
            >
              {para ? " Show Less" : "Read More"}
            </button>
          </p>
          <button
            type="button"
            onClick={() => setInterest(t.id)}
            className="text-red-600 border-2 border-red-600 p-1 my-5 mx-auto rounded-md"
          >
            Not Interested
          </button>
        </div>
      </div>
    );
  });
};

export default Card;
