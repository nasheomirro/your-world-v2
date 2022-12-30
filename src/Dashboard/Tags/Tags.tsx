import { useWorldStore } from "@/app/world";
import { DropdownMultipleCombobox } from "@/Editor/TagInput/example";
import shallow from "zustand/shallow";

const Tags: React.FC = () => {
  const tags = useWorldStore((state) => Object.values(state.tags), shallow);
  return (
    <ul>
      I am tags
      {tags.map((tag) => (
        <li key={tag.id}>{tag.name}</li>
      ))}
      <DropdownMultipleCombobox />
      <DropdownMultipleCombobox />
    </ul>
  );
};

export default Tags;
