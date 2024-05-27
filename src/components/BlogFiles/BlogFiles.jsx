import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BlogFiles.css";

const BlogFiles = () => {
  const [files, setFiles] = useState({});
  const [scroll, setScroll] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFiles = Object.keys(files).reduce((acc, date) => {
    const filteredArticles = files[date].filter((article) =>
      article.Titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredArticles.length > 0) {
      acc[date] = filteredArticles;
    }
    return acc;
  }, {});

  return (
    <div className="blogfiles-content">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Buscar por título"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">
          <img src="img/search-blog.svg" alt="" />
        </button>
      </form>
      <div className="files-list">
        <h2>Archivos</h2>
        <ul>
          {Object.keys(filteredFiles).length === 0 && <li>No se encontraron artículos</li>}
          {Object.keys(filteredFiles).map((monthYear) => (
            <li key={monthYear}>
              <div onClick={() => toggleScrolled(monthYear)}>
                {">"} {monthYear} ({filteredFiles[monthYear].length})
              </div>
              {scroll[monthYear] && (
                <ul>
                  {filteredFiles[monthYear].map((file) => (
                    <li key={file.ID_Articulo}>
                      <Link
                        to={{
                          pathname: `/articulo/${file.ID_Articulo}`,
                          state: { blog: file },
                        }}
                      >
                        {file.Titulo}
                      </Link>
                    </li>
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
