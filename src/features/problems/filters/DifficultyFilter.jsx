import { Filter } from 'lucide-react';

const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

export default function DifficultyFilter({
  selectedDifficulty,
  setSelectedDifficulty,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground flex items-center gap-2">
        <Filter className="w-4 h-4" />
        Difficulty
      </label>

      <div className="flex flex-wrap gap-2">
        {difficulties.map((diff) => (
          <button
            key={diff}
            onClick={() => setSelectedDifficulty(diff)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedDifficulty === diff
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {diff}
          </button>
        ))}
      </div>
    </div>
  );
}
