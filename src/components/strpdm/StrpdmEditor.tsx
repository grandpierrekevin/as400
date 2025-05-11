import { Member } from "@/hooks/useStrpdmMembers";

type StrpdmEditorProps = {
  member: Member;
  content: string;
  onChange: (value: string) => void;
  onClose: () => void;
};

export default function StrpdmEditor({ member, content, onChange, onClose }: StrpdmEditorProps) {
  return (
    <div className="absolute top-8 left-8 bg-black border border-green-500 p-4 w-[40rem] shadow-xl">
      <h2 className="text-lg font-bold mb-2">✍️ Édition : {member.name}</h2>
      <textarea
        className="w-full h-48 bg-black text-green-500 border border-green-500 p-2 font-mono text-sm"
        value={content}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="text-right mt-2">
        <button
          onClick={onClose}
          className="border border-green-500 px-3 py-1 hover:bg-green-500 hover:text-black"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}
