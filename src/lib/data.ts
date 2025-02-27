import { Job } from "./interface";

export async function getJobs(filter: [] | string[]) {
  const fetcher = await fetch("./data.json");
  const data: Array<Job> = await fetcher.json();

  const newFilter = [...new Set(filter)];

  if (filter.length != 0 && data) {
    return data.filter((job) => {
      const tags = [job.level, job.role, ...job.languages, ...job.tools];
      return tags.some((tag: string) => newFilter.includes(tag));
    });
  }

  return data;
}
