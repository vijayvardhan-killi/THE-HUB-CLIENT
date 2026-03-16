import { Card } from '@/components/ui/card';
import ProblemRow from './ProblemRow';

export default function ProblemsTable({ problems }) {
  return (
    <Card className="border-border bg-card overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Title</th>
            <th className="px-6 py-4 text-left">Difficulty</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Acceptance</th>
            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {problems.map((problem) => (
            <ProblemRow key={problem.id} problem={problem} />
          ))}
        </tbody>
      </table>

      {problems.length === 0 && (
        <div className="text-center py-12">No problems found</div>
      )}
    </Card>
  );
}
