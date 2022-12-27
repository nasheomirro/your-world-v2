import { Link, Outlet } from 'react-router-dom';

import { useWorldStore } from '@/app/world-curr';
import { useCurrentMeta } from '@/app/world-metas/hooks';
import { stateObjectToArray } from '@/utils';

import Icons from '@/components/Icons';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import DashboardNavbar from './DashboardNavbar';
import Notes from './Notes';

const Dashboard: React.FC = () => {
  const notes = useWorldStore((state) => stateObjectToArray(state.notes));
  const meta = useCurrentMeta();

  return (
    <Container>
      {/* For modals only */}
      <Outlet />

      <DashboardNavbar />
      <Header>
        <Header.Title>{meta.name}</Header.Title>
        <div className="flex flex-wrap gap-3">
          <Button as={Link} to={'settings'}>
            edit world
            <Icons.Settings />
          </Button>
          <Button as={Link} to={'new'}>
            create note
            <Icons.ArrowRight />
          </Button>
        </div>
      </Header>
      <Notes notes={notes} />
    </Container>
  );
};

export default Dashboard;
