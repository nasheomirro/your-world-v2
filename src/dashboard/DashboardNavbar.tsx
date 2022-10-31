import { Link } from 'react-router-dom';
import { useWorld } from '@/app/world/hooks';
import useNavbarToggle from '@/hooks/useNavbarToggle';

import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import WorldSettings from './WorldSettings';

const DashboardNavbar: React.FC = () => {
  const world = useWorld();
  const { menuRef, onToggle, toggle } = useNavbarToggle();

  return (
    <Navbar>
      <Navbar.Logo />
      <WorldSettings />
      <Navbar.Toggle onClick={onToggle} />
      <Navbar.Menu toggle={toggle} ref={menuRef}>
        <li>
          <Navbar.Link to={`/${world.id}`}>dashboard</Navbar.Link>
        </li>
        <li>
          <Navbar.Link to={`/${world.id}/tags`}>see tags</Navbar.Link>
        </li>
        <li className="md:hidden">
          <Navbar.Link to={`/${world.id}/new`}>create new</Navbar.Link>
        </li>
        <li>
          <Button
            as={Link}
            className="hidden md:inline-block"
            to={`/${world.id}/new`}
          >
            New Note
          </Button>
        </li>
      </Navbar.Menu>
    </Navbar>
  );
};

export default DashboardNavbar;
