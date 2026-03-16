import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-border/20">
      {/* <div className="flex flex-row items-center gap-2">
        <Link to={'/'}>
          <div className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground">THE HUB</span>
        </Link>
      </div> */}
      <div className="p-2 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-sidebar-foreground">
            THE HUB
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login">
          <Button
            variant="outline"
            className="border-border hover:bg-card bg-transparent"
          >
            Sign In
          </Button>
        </Link>
        <Link to="signup">
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
