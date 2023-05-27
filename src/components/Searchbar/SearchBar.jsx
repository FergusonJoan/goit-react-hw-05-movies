import { useSearchParams } from 'react-router-dom';
import { Button, Input } from './SearchBar.styled';
import { Route } from 'react-router-dom';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.query.value.toLowerCase().trim();

    if (!value) return;

    setSearchParams({ q: value });

    e.target.reset();
  };

  const query = searchParams.get('q');

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Input type="text" name="query" defaultChecked={query} />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
};
