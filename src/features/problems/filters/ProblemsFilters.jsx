import { Card } from '@/components/ui/card';

import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import DifficultyFilter from './DifficultyFilter';

export default function ProblemsFilters({
  search,
  setSearch,
  category,
  setCategory,
  difficulty,
  setDifficulty,
}) {
  return (
    <Card className="p-6 border-border bg-card space-y-4">
      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter
        selectedCategory={category}
        setSelectedCategory={setCategory}
      />

      <DifficultyFilter
        selectedDifficulty={difficulty}
        setSelectedDifficulty={setDifficulty}
      />
    </Card>
  );
}
