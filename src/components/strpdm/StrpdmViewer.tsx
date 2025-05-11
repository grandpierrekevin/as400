import { Member } from "@/hooks/useStrpdmMembers";

type StrpdmViewerProps = {
  member: Member;
  onClose: () => void;
};

export default function StrpdmViewer({ member, onClose }: StrpdmViewerProps) {
  return (
    <div className="absolute top-8 left-8 bg-black border border-green-500 p-4 w-[40rem] shadow-xl">
      <h2 className="text-lg font-bold mb-2">👁️ Visualisation : {member.name}</h2>
      <pre className="whitespace-pre-wrap bg-black text-green-500 border border-green-500 p-2 text-sm h-48 overflow-auto">
        {member.content}
      </pre>
      <div className="text-right mt-2">
        <button
          onClick={onClose}
          className="border border-green-500 px-3 py-1 hover:bg-green-500 hover:text-black"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
