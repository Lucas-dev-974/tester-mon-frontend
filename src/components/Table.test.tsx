import "../__mocks__/fetch.js";
import { render, screen, waitFor } from "@solidjs/testing-library";
import DataTable from "./Table";

describe("DataTable", () => {
  test("affiche les données dans le tableau", async () => {
    render(() => (
      <DataTable
        items={[{ id: 1, name: "jeu 1", editor: "editeur 1", nb_players: 1 }]}
      />
    ));

    await waitFor(() => {
      expect(screen.getByText("jeu 1")).toBeInTheDocument();
      expect(screen.getByText("editeur 1")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });
});
