const ProblemsHeader = ({ total }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold text-foreground">Problems</h1>
      <p className="text-lg text-muted-foreground">
        Master your coding skills with {total} curated problems
      </p>
    </div>
  );
};
export default ProblemsHeader;
