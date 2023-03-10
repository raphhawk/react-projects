export const cssClasses = {
  container:
    "flex flex-col p-10 bg-white rounded-xl shadow-2xl w-1/3 mx-auto my-20",
  btn: "bg-pink-400 rounded-md p-4 mt-10 text-white",
  img: "p-2 object-cover h-32 w-32 rounded-full",
};

export const List = ({ people }) => {
  return (
    <>
      {people.map((p) => {
        return (
          <article className=" flex mt-5" key={p.id}>
            <img src={p.img} alt="image" className={cssClasses.img} />
            <div className="flex flex-col my-auto">
              <h4 className="font-bold text-xl">{p.name}</h4>
              <p className="text-gray-600">{p.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
