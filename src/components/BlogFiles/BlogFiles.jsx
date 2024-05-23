import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parse, format } from 'date-fns';
import './BlogFiles.css';

const BlogFiles = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await fetch("http://localhost:5000/articulos");
        const data = await response.json();

        // Convertir y formatear la fecha a un formato legible
        const formattedData = data.map(articulo => {
          let formattedDate;
          try {
            // Parsear la fecha desde 'yyyy/MM/dd' y formatearla a 'dd/MM/yyyy'
            const parsedDate = parse(articulo.date, 'yyyy/MM/dd', new Date());
            formattedDate = format(parsedDate, 'dd/MM/yyyy');
          } catch (error) {
            console.error("Error al parsear la fecha:", error);
            formattedDate = "Fecha no válida"; // Manejo de error en caso de formato incorrecto
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
      {articulos.map(articulo => (
        <div key={articulo.id}>
          <Link to={`/blogdetail/${articulo.id}`}>
            <p>{articulo.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogFiles;
