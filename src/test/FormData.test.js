import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import FormData from "../components/FormData/FormData"; // Asegúrate de que la ruta a tu componente sea correcta

// Mock de axios
vi.mock("axios");

describe("FormData Component", () => {
  beforeEach(() => {
    axios.get.mockReset();
    axios.delete.mockReset();
  });

  it("should fetch and display users", async () => {
    const mockUsers = [
      {
        ID_Contacto: 1,
        Nombre: "John Doe",
        Email: "john@example.com",
        Asunto: "Hello",
        Mensaje: "Hello, world!",
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockUsers });

    render(<FormData />);

    expect(screen.getByText("Usuarios en contacto")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("john@example.com")).toBeInTheDocument();
      expect(screen.getByText("Hello")).toBeInTheDocument();
      expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    });
  });

  it("should delete a user and fetch updated users", async () => {
    const mockUsers = [
      {
        ID_Contacto: 1,
        Nombre: "John Doe",
        Email: "john@example.com",
        Asunto: "Hello",
        Mensaje: "Hello, world!",
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockUsers });
    axios.delete.mockResolvedValueOnce({});
    axios.get.mockResolvedValueOnce({ data: [] });

    render(<FormData />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    const deleteButton = screen.getByText("Eliminar");
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    });
  });

  it("should handle fetch error", async () => {
    axios.get.mockRejectedValueOnce(new Error("Error fetching data"));

    render(<FormData />);

    await waitFor(() => {
      expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    });
  });

  it("should handle delete error", async () => {
    const mockUsers = [
      {
        ID_Contacto: 1,
        Nombre: "John Doe",
        Email: "john@example.com",
        Asunto: "Hello",
        Mensaje: "Hello, world!",
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockUsers });
    axios.delete.mockRejectedValueOnce(new Error("Error deleting data"));

    render(<FormData />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    const deleteButton = screen.getByText("Eliminar");
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });
});
