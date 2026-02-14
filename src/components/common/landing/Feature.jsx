const Feature = ({Icon, title, description}) => {
  return (
        <div
          key={title}
          className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
        >
          <Icon className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
  );
};

export default Feature;
