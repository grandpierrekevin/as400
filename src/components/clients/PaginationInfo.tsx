type PaginationInfoProps = {
    currentPage: number;
    pageSize: number;
    totalItems: number;
  };
  
  export default function PaginationInfo({ currentPage, pageSize, totalItems }: PaginationInfoProps) {
    const start = currentPage * pageSize + 1;
    const end = Math.min((currentPage + 1) * pageSize, totalItems);
  
    return (
      <p className="mt-2 italic text-xs">
        Lignes {start} à {end} sur {totalItems}
      </p>
    );
  }
  