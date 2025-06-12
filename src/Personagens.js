import React, { useEffect, useState } from "react";
import axios from "axios";

function Personagens() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      let allCharacters = [];
      let nextUrl = "https://rickandmortyapi.com/api/character";

      while (nextUrl) {
        const res = await axios.get(nextUrl);
        allCharacters = [...allCharacters, ...res.data.results];
        nextUrl = res.data.info.next;
      }

      setCharacters(allCharacters);
      setFiltered(allCharacters);
    };

    fetchAllCharacters();
  }, []);

  useEffect(() => {
    const results = characters.filter((char) =>
      char.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, characters]);

  return (
    <div style={{ backgroundColor: "#1e1e2f", minHeight: "100vh", color: "#fff", padding: "20px" }}>
      <input
        type="text"
        placeholder="Pesquisar personagem..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: "block",
          margin: "0 auto 20px auto",
          padding: "10px",
          width: "80%",
          maxWidth: "400px",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((char) => (
          <div
            key={char.id}
            style={{
              backgroundColor: "#2e2e3f",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
              padding: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{char.name}</h3>
            <p>{char.species}</p>
            <p>{char.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personagens;
