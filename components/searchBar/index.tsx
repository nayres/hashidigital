import { useState, ChangeEvent } from 'react'
import SearchIcon from './SearchIcon'
import style from './style.module.css'

interface SearchBarProps {
  label: string
  searchValue: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar({
  label,
  searchValue,
  onChange,
}: SearchBarProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => onChange(event)

  return (
    <div className={style.baseSearchBar}>
      <label htmlFor="search-input">
        <SearchIcon />
      </label>
      <input
        id="search-input"
        type="text"
        value={searchValue}
        placeholder={label}
        onChange={handleSearch}
      />
    </div>
  )
}
