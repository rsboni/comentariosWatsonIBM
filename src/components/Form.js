import React from "react";

//Material UI 
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

//Hooks
import useInputState from "../hooks/useInputState";

export default function Form({ addComment }) {
  // Hoooks para o formulario
  const [value, handleChange, reset] = useInputState("");
  
  return (
    <Paper style={{ margin: "0", padding: "0 1rem 0 1rem" }}>
      <form>
        {/* Input de texto do comentário */}
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={6}
          variant="outlined"
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Escreva seu comentário"
          fullWidth
          require
        />
        {/* Botão para ouvir */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "1rem" }}
          onClick={(e) => {
            addComment(value);
            reset();
          }}
          fullWidth
        >
          Adicionar Comentário
        </Button>
      </form>
    </Paper>
  );
}
