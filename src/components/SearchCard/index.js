  import React, { useState } from 'react'
  import monsters from '../../monsters.json'

  export const SearchCard = ({ updateMonster }) => {
    const [search, updateSearch] = useState('')

    const handleChange = (e) => {
      const { name, value } = e.target

      updateMonster(monsters.filter((itm) => itm.name.includes(value)))
      updateSearch(value)
    }

    return (
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search monsters"
          value={search}
          onChange={handleChange}
        />
      </div>
    )
  }
