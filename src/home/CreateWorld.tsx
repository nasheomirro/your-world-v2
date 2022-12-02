import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { openWorldDB } from '@/app/world-curr/db';
import { useMetaStore } from '@/app/world-metas';

import Button from '@/components/Button';
import { Icons } from '@/components/Icons';

const CreateWorld: React.FC = () => {
  const createMeta = useMetaStore((state) => state.createMeta);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [toggle, setToggle] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = nanoid();
    await openWorldDB(id, true);
    await createMeta({ name, id });
    navigate(id);
  };

  if (!toggle)
    return (
      <Button className="ml-auto md:ml-0" onClick={() => setToggle(true)}>
        create new world
        <Icons.Click />
      </Button>
    );

  return (
    <form className="" onSubmit={onSubmit}>
      <input
        className=""
        placeholder="world name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>Create New World</Button>
    </form>
  );
};

export default CreateWorld;