import { Job } from "../lib/interface";
import { clsx } from "clsx";
import { useFilterTags } from "../context/tagsContext";

export default function List({
  data,
  isLoading,
}: {
  data: Array<Job>;
  isLoading: boolean;
}) {
  if (isLoading) return <p>Carregando</p>;
  return (
    <ul className="max-w-[1110px] mx-auto">
      {data?.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </ul>
  );
}

export function Item({ data }: { data: Job }) {
  const tags = [
    data.role,
    data.level,
    ...Array.from(new Set(data.languages.concat(data.tools))),
  ];

  return (
    <li
      className={clsx(
        "bg-white pt-11 md:pt-6 pb-6 md:pb-2.5 px-4 md:px-9 relative mb-[40px] rounded md:flex items-center",
        data.featured == true ? "border-l-4 border-l-cyan-500" : "",
      )}
    >
      <div className="md:flex items-center pb-4 gap-6 border-b border-b-gray-500 md:border-0 flex-1">
        <img
          className="absolute md:relative block -top-6 md:top-auto w-12 md:w-auto"
          src={data.logo.replace(".", "")}
          alt={data.company + " logo"}
        />
        <div>
          <div className="flex item-center font-bold">
            <h1 className="text-cyan-500 mr-6 text-lg">{data.company}</h1>
            <span
              className={clsx(
                "bg-cyan-500 header-item-span mr-2",
                data.new == true ? "block" : "hidden",
              )}
            >
              new
            </span>
            <span
              className={clsx(
                "bg-gray-800 header-item-span",
                data.featured == true ? "block" : "hidden",
              )}
            >
              featured
            </span>
          </div>
          <p className="font-bold text-gray-800 hover:text-cyan-500 transition-all cursor-pointer pt-3 pb-4 md:text-2xl">
            {data.position}
          </p>
          <p className="font-normal text-base md:text-lg text-gray-500">
            {data.postedAt} <span className="circle" /> {data.contract}
            <span className="circle" /> {data.location}
          </p>
        </div>
      </div>
      <div className="flex item-center flex-wrap gap-4 pt-4 md:pt-0 font-bold">
        {tags.map((tag: string) => (
          <Button key={tag} tag={tag} />
        ))}
      </div>
    </li>
  );
}

export function Button({ tag }: { tag: string }) {
  const { setTags } = useFilterTags();

  const addNewTagForFilter = () => {
    setTags((prev) => [...new Set([...prev, tag])]);
  };

  return (
    <button
      className="text-cyan-500 hover:text-cyan-50-bg bg-cyan-50-bg hover:bg-cyan-500  px-2 py-1.5 rounded cursor-pointer transition-all"
      onClick={() => addNewTagForFilter()}
    >
      {tag}
    </button>
  );
}
