import { AuthNav } from 'components/authNav/AuthNav';
import { Nav } from 'components/nav/Nav';
import { UserNav } from 'components/userNav/UserNav';

export const Navigation = () => {
  return (
    <nav>
      <Nav />
      <UserNav />
      <AuthNav />
    </nav>
  );
};
