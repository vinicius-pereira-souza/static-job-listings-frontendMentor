import { useState, createContext, use } from "react";

type ContextType = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TagsContext = createContext<ContextType>({
  tags: [],
  setTags: () => {},
});

export default function TagsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <TagsContext.Provider value={{ tags, setTags }}>
      {children}
    </TagsContext.Provider>
  );
}

export function useFilterTags() {
  return use(TagsContext);
}
