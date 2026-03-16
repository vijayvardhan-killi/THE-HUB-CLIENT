import { useState } from 'react';
import ProblemsHeader from '@/features/problems/ProblemsHeader';
import ProblemsFilters from '@/features/problems/filters/ProblemsFilters';
import ProblemsTable from '@/features/problems/ProblemsTable';
import { mockProblems } from '@/lib/mock-data';

export default function ProblemsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');

  const filtered = mockProblems.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || p.category === category;
    const matchDifficulty = difficulty === 'All' || p.difficulty === difficulty;

    return matchSearch && matchCategory && matchDifficulty;
  });

  return (
    <div className="space-y-6">
      <ProblemsHeader total={mockProblems.length} />

      <ProblemsFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      <ProblemsTable problems={filtered} />
    </div>
  );
}
