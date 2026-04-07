interface UpdatedDateProps {
  date?: string;
  className?: string;
}

export default function UpdatedDate({
  date = "Apr 7, 2026",
  className = "text-zinc-400 text-xs",
}: UpdatedDateProps) {
  return <p className={className}>Updated {date}</p>;
}
