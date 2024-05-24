import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogFiles.css";

const BlogFiles = () => {
  const [files, setFiles] = useState({});
  const [scroll, setScroll] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articulos");
        const formattedData = response.data.map((articulo) => ({
          ...articulo,
          Fecha: new Date(articulo.Fecha).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          }),
        }));
        const groupedData = groupByMonthYear(formattedData);
        setFiles(groupedData);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchAPI();
  }, []);

  const groupByMonthYear = (data) => {
    const grouped = {};
    data.forEach((item) => {
      if (!grouped[item.Fecha]) {
        grouped[item.Fecha] = [];
      }
      grouped[item.Fecha].push(item);
    });
    return grouped;
  };

  const toggleScrolled = (monthYear) => {
    setScroll((prevState) => ({
      ...prevState,
      [monthYear]: !prevState[monthYear],
    }));
  };

  const sortedKeys = Object.keys(files).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div className="blogfiles-content">
      <form className="search-form">
        <input
          type="text"
          placeholder="Buscar por año"
          className="search-input"
          disabled
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>
      <div className="files-list">
        <h2>Archivos</h2>
        <ul>
          {sortedKeys.map((monthYear) => (
            <li key={monthYear}>
              <div onClick={() => toggleScrolled(monthYear)}>
                {">"} {monthYear} ({files[monthYear].length})
              </div>
              {scroll[monthYear] && (
                <ul>
                  {files[monthYear].map((file) => (
                    <li key={file.ID_Articulo}>{file.Titulo}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogFiles;
