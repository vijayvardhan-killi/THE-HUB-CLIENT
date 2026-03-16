import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ProblemRow({ problem }) {
  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'Easy') return 'text-green-400';
    if (difficulty === 'Medium') return 'text-yellow-400';
    if (difficulty === 'Hard') return 'text-red-400';
  };

  return (
    <tr className="border-b border-border hover:bg-muted/30">
      <td className="px-6 py-4">{problem.status}</td>

      <td className="px-6 py-4 font-medium">{problem.title}</td>

      <td className={`px-6 py-4 ${getDifficultyColor(problem.difficulty)}`}>
        {problem.difficulty}
      </td>

      <td className="px-6 py-4">{problem.category}</td>

      <td className="px-6 py-4">{problem.acceptance}%</td>

      <td className="px-6 py-4">
        <Link to={`/dashboard/problems/${problem.id}`}>
          <Button size="sm">Solve</Button>
        </Link>
      </td>
    </tr>
  );
}
