import { useFilterTags } from "../context/tagsContext";
import { clsx } from "clsx";

export default function HeaderFilter() {
  const { tags, setTags } = useFilterTags();

  const remoteTagFilter = (tag: string) => {
    setTags((prevState) => prevState.filter((currentTag) => currentTag != tag));
  };

  return (
    <header
      className={clsx(
        `mb-[55px] max-w-[1110px] mx-auto bg-white flex item-center justify-between 
        py-[20px] px-[40px] rounded-md transition-all`,
        tags.length !== 0 ? "block" : "hidden",
      )}
    >
      <div className="flex-1 flex items-center gap-4 flex-wrap">
        {tags.length != 0 &&
          tags.map((tag: string) => (
            <div
              key={tag}
              className="flex items-center text-cyan-500 font-bold"
            >
              <span className="block bg-cyan-50-bg px-2.5 py-1 rounded-l">
                {tag}
              </span>
              <button
                className="px-[8px] py-1 text-white bg-cyan-500 hover:bg-gray-800 block transition-all cursor-pointer rounded-r"
                onClick={() => remoteTagFilter(tag)}
              >
                X
              </button>
            </div>
          ))}
      </div>
      <button
        className="text-gray-800 hover:text-cyan-500 transition-all hover:underline cursor-pointer p-2 font-bold"
        onClick={() => setTags([])}
      >
        Clean
      </button>
    </header>
  );
}
