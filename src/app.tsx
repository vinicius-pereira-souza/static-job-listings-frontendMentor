import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { JobList } from "./lib/interface";
import { getJobs } from "./lib/data";
import { useFilterTags } from "./context/tagsContext";
import { clsx } from "clsx";

import List from "./ui/list";
import HeaderImage from "./ui/header-image";
import HeaderFilter from "./ui/header-filter";

export default function Page() {
  const { tags } = useFilterTags();

  const { data, isLoading } = useQuery<JobList>({
    queryKey: ["tags", tags[tags.length - 1]],
    queryFn: () => getJobs(tags),
    placeholderData: keepPreviousData,
  });

  return (
    <div
      className={clsx(
        `min-h-screen px-5 pb-[150px] bg-cyan-50-bg relative text-[15px]`,
        tags.length == 0 ? "pt-[230px]" : "pt-[120px]",
      )}
    >
      <HeaderImage />
      <div className="relative z-30">
        <HeaderFilter />
        {data && <List data={data} isLoading={isLoading} />}
      </div>
    </div>
  );
}
