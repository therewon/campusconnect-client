interface Props {
  skill: string;
}

export function SkillBadge({ skill }: Props) {
  return (
    <span
      className="
      inline-flex
      items-center
      px-3
      py-1
      rounded-full
      bg-blue-50
      text-blue-700
      text-xs
      font-semibold
      border
      border-blue-100
      hover:bg-blue-100
      transition
      "
    >
      #{skill}
    </span>
  );
}