interface ListItem {
  id: string;
  text: string;
}

interface ListProps {
  items: ListItem[];
  color: string;
}

export const List = ({ items, color }: ListProps) => {
  return (
    <ul className={`text-${color} space-y-3`}>
      {items.map((item) => (
        <li key={item.id} className="list-inside list-disc">
          {item.text}
        </li>
      ))}
    </ul>
  );
};
