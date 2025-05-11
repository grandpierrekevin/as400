import { useNavigate } from "react-router-dom";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import { useStrpdmMembers } from "@/hooks/useStrpdmMembers";
import StrpdmTable from "@/components/strpdm/StrpdmTable";
import StrpdmEditor from "@/components/strpdm/StrpdmEditor";
import StrpdmViewer from "@/components/strpdm/StrpdmViewer";
import FooterNavigation from "@/components/FooterNavigation";

export default function STRPDMPage() {
  const navigate = useNavigate();
  const {
    members,
    options,
    editing,
    viewing,
    editContent,
    updateOption,
    handleEnter,
    closeEditor,
    closeViewer,
    setEditContent,
  } = useStrpdmMembers();

  useAS400KeyboardNav({
    onF3: () => navigate("/home"),
    onF12: () => {
      closeEditor();
      closeViewer();
    },
  });

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 text-sm relative">
      <h1 className="text-xl font-bold mb-4">📂 STRPDM - Liste des membres source</h1>

      <StrpdmTable
        members={members}
        options={options}
        updateOption={updateOption}
        handleEnter={handleEnter}
      />

      <div className="mt-6 border-t border-green-500 pt-2">
        <span className="inline-block w-32">==&gt;</span>
        <input
          type="text"
          className="bg-black border-b border-green-500 text-green-500 outline-none w-64"
          placeholder="Tapez une commande ici (simulation)"
        />
      </div>

      {editing && (
        <StrpdmEditor
          member={editing}
          content={editContent}
          onChange={setEditContent}
          onClose={closeEditor}
        />
      )}

      {viewing && <StrpdmViewer member={viewing} onClose={closeViewer} />}
      <FooterNavigation />
    </div>
  );
}
