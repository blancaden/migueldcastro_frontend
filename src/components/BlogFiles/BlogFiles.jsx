import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogFiles.css';

const BlogFiles = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await fetch("http://localhost:5000/articulos");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la red");
        }

        const data = await response.json();
        const formattedData = data.map(articulo => {
          let formattedDate;
          try {
            const parsedDate = parse(articulo.date, 'yyyy/MM/dd', new Date());
            formattedDate = format(parsedDate, 'dd/MM/yyyy');
          } catch (error) {
            console.error("Error al parsear la fecha:", error);
            formattedDate = "Fecha no válida"; 
          }
          return {
            ...articulo,
            date: formattedDate,
          };
        });

        setArticulos(formattedData);
      } catch (error) {
        console.error("Error al cargar los artículos de blog:", error);
      }
    };

    fetchArticulos();
  }, []);

  return (
    <div className='blogfiles-content'>
      <h1>Archivos</h1>
      {articulos.length > 0 ? (
        articulos.map(articulo => (
          <div key={articulo.id}>
            <Link to={`/blogdetail/${articulo.id}`}>
              <p>{articulo.date}</p>
              <h2>{articulo.title}</h2>
            </Link>
          </div>
        ))
      ) : (
        <p>No hay artículos disponibles</p>
      )}
    </div>
  );
};

export default BlogFiles;
