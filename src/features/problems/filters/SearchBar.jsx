import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

      <Input
        placeholder="Search problems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10 bg-muted border-input"
      />
    </div>
  );
}
