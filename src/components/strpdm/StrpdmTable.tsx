import { Member } from "@/hooks/useStrpdmMembers";

type StrpdmTableProps = {
  members: Member[];
  options: Record<string, string>;
  updateOption: (name: string, value: string) => void;
  handleEnter: (member: Member) => void;
};

export default function StrpdmTable({ members, options, updateOption, handleEnter }: StrpdmTableProps) {
  return (
    <table className="table-auto border-collapse w-full mb-4">
      <thead>
        <tr className="border-b border-green-500">
          <th className="p-2">Opt</th>
          <th className="p-2">Nom</th>
          <th className="p-2">Type</th>
          <th className="p-2">Texte</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.name} className="hover:bg-green-800/10">
            <td className="p-2">
              <input
                className="bg-black text-green-500 border-b border-green-500 w-10 text-center outline-none"
                value={options[member.name] || ""}
                onChange={(e) => updateOption(member.name, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEnter(member);
                }}
              />
            </td>
            <td className="p-2">{member.name}</td>
            <td className="p-2">{member.type}</td>
            <td className="p-2">{member.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
