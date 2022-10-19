import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useWorld } from "@/app/world/hooks";
import { notesToArray } from "@/utils";

import Navbar from "@/components/Navbar";
import NoteList from "@/components/NoteList";

const Tagpage = () => {
  const { notes, tags } = useWorld();

  const id = useParams<{ id: string }>().id as string;
  const tag = tags[id];
  
  if (!tag) return <div>error: tag does not exist</div>;

  const filteredNotes = useMemo(
    () =>
      notesToArray(notes).filter(
        (note) => note.tagIds.findIndex((tagId) => tagId === tag.id) !== -1
      ),
    [tag, notes]
  );

  return (
    <div>
      <Navbar />
      <h1>{tag.name}</h1>
      <p>{tag.description}</p>
      <NoteList notes={filteredNotes} tagsObj={tags} />
    </div>
  );
};

export default Tagpage;