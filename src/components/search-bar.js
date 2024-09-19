import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center p-2 space-x-2 border rounded-md">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
      <Input
        type="search"
        placeholder="Buscar..."
        className="flex-1"
      />
    </div>
  );
}
