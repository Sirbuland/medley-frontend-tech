import React, { useEffect, useState } from 'react'
import { SearchProps } from './search.interface';
import { Input } from './search.style';
import debounce from 'lodash.debounce';

const Search: React.FC<SearchProps> = ({ placeholder, onChange, name, value, ...props }) => {
  const [inputSearch, setInputSearch] = useState<string>(value);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value)
  }

  const debouncedSearch = debounce((value: string) => {
    onChange(value);
  }, 500);

  useEffect(() => {
    debouncedSearch(inputSearch);

    return () => debouncedSearch.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearch])

  return (
    <Input
      {...props}
      type="text"
      name={name}
      value={inputSearch}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  )
}

export default Search