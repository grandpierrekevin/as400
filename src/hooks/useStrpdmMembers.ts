import { useState } from "react";

export type Member = {
  name: string;
  type: string;
  text: string;
  content: string;
};

const initialMembers: Member[] = [
  {
    name: "CLIENT",
    type: "RPGLE",
    text: "Gestion des clients",
    content: "C     *ENTRY    PLIST\nC              PARM      CLIENT",
  },
  {
    name: "FCTCMD",
    type: "CLP",
    text: "Soumission factures",
    content: "PGM\nSBMJOB CMD(CALL PGM(FCTGEN))\nENDPGM",
  },
  {
    name: "SPLLOG",
    type: "RPGLE",
    text: "Journal des spools",
    content: "C     *ENTRY    PLIST\nC              PARM      USERID",
  },
  {
    name: "JOBMON",
    type: "CLLE",
    text: "Supervision des jobs",
    content: "PGM\nDCL VAR(&JOB) TYPE(*CHAR) LEN(10)\nENDPGM",
  },
];

export function useStrpdmMembers() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [options, setOptions] = useState<Record<string, string>>({});
  const [editing, setEditing] = useState<Member | null>(null);
  const [viewing, setViewing] = useState<Member | null>(null);
  const [editContent, setEditContent] = useState<string>("");

  const updateOption = (name: string, value: string) => {
    setOptions((prev) => ({ ...prev, [name]: value.toUpperCase() }));
  };

  const handleEnter = (member: Member) => {
    const opt = options[member.name]?.toUpperCase();
    switch (opt) {
      case "2":
        setEditing(member);
        setEditContent(member.content);
        break;
      case "5":
        setViewing(member);
        break;
      case "4":
        alert(`🗑️ Suppression simulée du membre : ${member.name}`);
        break;
      default:
        alert("❌ Option invalide. Utilisez 2, 4 ou 5.");
    }
  };

  const closeEditor = () => {
    if (editing) {
      alert(`💾 Modification simulée du membre ${editing.name}`);
    }
    setEditing(null);
  };

  const closeViewer = () => setViewing(null);

  return {
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
  };
}
