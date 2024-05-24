import { shallow, describe, it } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";

describe("AdminNavbar Component", () => {
  it("renders without crashing", () => {
    const adminNavbar = (
      <Router>
        <AdminNavbar />
      </Router>
    );
  });

  it('redirects to login page when "Cerrar Sesión" is clicked', () => {
    const { history } = (
      <Router>
        <AdminNavbar />
      </Router>
    );
  });

  it('calls onLogout when "Cerrar Sesión" is clicked', () => {
    const mockOnLogout = () => {}; // Función simulada

    const adminNavbar = (
      <Router>
        <AdminNavbar onLogout={mockOnLogout} />
      </Router>
    );
  });
});