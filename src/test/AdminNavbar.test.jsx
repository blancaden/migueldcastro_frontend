import { shallow, describe, it, beforeEach, expect } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import { render, screen } from "@testing-library/react";

describe("<AdminNavbar/>", () => {
  describe("WHEN the component was render", () => {
    it("SHOULD exist form text", () => {
      render(
        <Router>
          <AdminNavbar />
        </Router>
      );
      const { getByText } = screen;
      const formText = getByText("Formulario");

      expect(formText).toBeDefined;
    });

    it("SHOULD exist four links", async () => {
      render(
        <Router>
          <AdminNavbar />
        </Router>
      );
      const { findAllByRole } = screen;
      const elements = await findAllByRole("listitem");

      expect(elements.length).equals(4);
    });
  });
});
