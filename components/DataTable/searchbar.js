import { Input } from '@nextui-org/react';

export default function SearchBar({ searchTerm, handleSearchChange }) {
  return (
    <div className="mt-8">
      <Input
      aria-label='Searchbar'
        placeholder="Search for an item..."
        size="lg"
        value={searchTerm}
        onChange={handleSearchChange}
        className="dark"
        width="50vw"
        color="default"
        clearable
        bordered
      />
    </div>
  );
}