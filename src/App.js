import { useState } from "react";

const songs = [
  // Luis Miguel - Amor
  { artista: "Luis Miguel", cancion: "La Incondicional", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "Ahora Te Puedes Marchar", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "Tu Solo Tu", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "Culpable o No", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "No Sé Tú", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "Hasta Que Me Olvides", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "Por Debajo de la Mesa", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "O Tú o Ninguna", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "Eres", tema: "Amor" },
  { artista: "Luis Miguel", cancion: "Sabor a Mí", tema: "Amor" },

  // Luis Miguel - Desamor
  { artista: "Luis Miguel", cancion: "La Barca", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "Inolvidable", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "Que Seas Feliz", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "Si Te Vas", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "Cien Años", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "No Me Platiques Más", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "Te Extraño", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "Amor, Amor, Amor", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "Por Debajo de la Mesa", tema: "Desamor" },
  { artista: "Luis Miguel", cancion: "Nada Es Igual", tema: "Desamor" },

  // Alejandro Sanz - Amor
  { artista: "Alejandro Sanz", cancion: "Corazón Partío", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "Amiga Mía", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "Mi Soledad y Yo", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "No Es lo Mismo", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "Looking for Paradise", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "Desde Cuando", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "Para Que Tú No Llores", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "La Música No Se Toca", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "Te Lo Agradezco, Pero No", tema: "Amor" },
  { artista: "Alejandro Sanz", cancion: "El Alma al Aire", tema: "Amor" },

  // Alejandro Sanz - Desamor
  { artista: "Alejandro Sanz", cancion: "Cuando Nadie Me Ve", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "No Me Compares", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "¿Lo Ves?", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "Donde Convergemos", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "Aquello Que Me Diste", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "Enséñame Tus Manos", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "Si Hay Dios", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "Quisiera Ser", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "La Fuerza del Corazón", tema: "Desamor" },
  { artista: "Alejandro Sanz", cancion: "Esta Noche", tema: "Desamor" },

  // Cristian Castro - Amor
  { artista: "Cristian Castro", cancion: "Azul", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "Por Amarte Así", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "No Podrás", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "Lo Mejor de Mí", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "Lloran las Rosas", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "Te Llamé", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "Amor", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "Mi Vida Sin Tu Amor", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "Por Qué Me Haces Llorar", tema: "Amor" },
  { artista: "Cristian Castro", cancion: "Nunca Voy a Olvidarte", tema: "Amor" },

  // Cristian Castro - Desamor
  { artista: "Cristian Castro", cancion: "Después de Ti...¿Qué?", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "No Hace Falta", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "Mujer Especial", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "Perdóname", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "Lo Dudo", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "Amor Eterno", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "El Culpable Soy Yo", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "Por Amarte", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "Volver a Amar", tema: "Desamor" },
  { artista: "Cristian Castro", cancion: "Yo Quería", tema: "Desamor" },

  // Juan Gabriel - Amor
  { artista: "Juan Gabriel", cancion: "Querida", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "Así Fue", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "Te Sigo Amando", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "No Tengo Dinero", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "Abrázame Muy Fuerte", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "Inocente de Ti", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "Me Gustas Mucho", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "Noa Noa", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "La Diferencia", tema: "Amor" },
  { artista: "Juan Gabriel", cancion: "Te Lo Pido por Favor", tema: "Amor" },

  // Juan Gabriel - Desamor
  { artista: "Juan Gabriel", cancion: "He Venido a Pedirte Perdón", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "Se Me Olvidó Otra Vez", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "Que Seas Feliz", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "Me Nace del Corazón", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "Amor Eterno", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "Lo Que Tú Necesitas", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "Que Voy a Hacer Sin Ti", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "El Noa Noa", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "Déjame Vivir", tema: "Desamor" },
  { artista: "Juan Gabriel", cancion: "Te Lo Pido por Favor", tema: "Desamor" },

  // Reik - Amor
  { artista: "Reik", cancion: "Yo Quisiera", tema: "Amor" },
  { artista: "Reik", cancion: "Creo en Ti", tema: "Amor" },
  { artista: "Reik", cancion: "Noviembre Sin Ti", tema: "Amor" },
  { artista: "Reik", cancion: "Me Niego", tema: "Amor" },
  { artista: "Reik", cancion: "Perfecta", tema: "Amor" },
  { artista: "Reik", cancion: "Peligro", tema: "Amor" },
  { artista: "Reik", cancion: "Qué Gano Olvidándote", tema: "Amor" },
  { artista: "Reik", cancion: "Inolvidable", tema: "Amor" },
  { artista: "Reik", cancion: "Amor con Hielo", tema: "Amor" },
  { artista: "Reik", cancion: "Un Amor de Verdad", tema: "Amor" },

  // Reik - Desamor
  { artista: "Reik", cancion: "Adiós", tema: "Desamor" },
  { artista: "Reik", cancion: "Creo en Ti (Versión Acústica)", tema: "Desamor" },
  { artista: "Reik", cancion: "Noviembre Sin Ti (Versión Acústica)", tema: "Desamor" },
  { artista: "Reik", cancion: "Me Niego (Remix)", tema: "Desamor" },
  { artista: "Reik", cancion: "Duele", tema: "Desamor" },
  { artista: "Reik", cancion: "Invierno", tema: "Desamor" },
  { artista: "Reik", cancion: "Te Fuiste", tema: "Desamor" },
  { artista: "Reik", cancion: "Y Fue Así", tema: "Desamor" },
  { artista: "Reik", cancion: "Sabes", tema: "Desamor" },
  { artista: "Reik", cancion: "No Me Haces Falta", tema: "Desamor" },
];

export default function App() {
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  const artistas = [...new Set(songs.map((s) => s.artista))];
  const temas = ["Amor", "Desamor"];

  const handleFilter = () => {
    const filtered = songs.filter(
      (s) =>
        (selectedArtist ? s.artista === selectedArtist : true) &&
        (selectedTheme ? s.tema === selectedTheme : true)
    );
    setFilteredSongs(filtered);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1 style={{ textAlign: "center", color: "#b22222" }}>🎤 Piano Bar - Selección de Canciones</h1>

      <div style={{ marginBottom: 20 }}>
        <label htmlFor="artist" style={{ fontWeight: "bold" }}>
          Artista:
        </label>
        <select
          id="artist"
          value={selectedArtist}
          onChange={(e) => setSelectedArtist(e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 5 }}
        >
          <option value="">-- Todos los artistas --</option>
          {artistas.map((art) => (
            <option key={art} value={art}>
              {art}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label htmlFor="theme" style={{ fontWeight: "bold" }}>
          Tema:
        </label>
        <select
          id="theme"
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 5 }}
        >
          <option value="">-- Todos los temas --</option>
          {temas.map((tema) => (
            <option key={tema} value={tema}>
              {tema}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleFilter}
        style={{
          backgroundColor: "#b22222",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: 5,
          marginBottom: 20,
          width: "100%",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Mostrar canciones
      </button>

      <div>
        {filteredSongs.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#555" }}>No hay canciones para mostrar.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {filteredSongs.map((song, idx) => (
              <li
                key={idx}
                style={{
                  padding: 10,
                  borderBottom: "1px solid #ddd",
                  backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                <strong>{song.cancion}</strong> — <em>{song.artista}</em> [{song.tema}]
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
