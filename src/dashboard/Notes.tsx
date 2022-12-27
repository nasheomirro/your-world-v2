import { Note } from '@/app/world-curr/types';
import ItemGrid from '@/components/ItemGrid';
import NoteItem from './NoteItem';

type Props = {
  notes: Note[];
};

const Notes: React.FC<Props> = ({ notes }) => {
  return (
    <ItemGrid as="ul">
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </ItemGrid>
  );
};

export default Notes;
