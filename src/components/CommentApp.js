import React from "react";

//dependencias do Material UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

//Componentes proprios
import CommentList from "./CommentList";
import Form from "./Form";

//Hooks
import useCommentState from "../hooks/useCommentState";

function CommentApp() {
  const { comments, fetchComments, addComment, playComment } = useCommentState();

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      {/* Barra superior */}
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Comentários com IBM Watson Service</Typography>
        </Toolbar>
      </AppBar>
      {/* Grid com o conteudo responsivo */}
      <Grid
        container
        justify="center"
        style={{ marginTop: "1rem" }}
        spacing={2}
      >
        {/* Formulario */}
        <Grid item xs={11} sm={8} lg={4}>
          <Form addComment={addComment} />
        </Grid>
        {/* Lista de comentarios */}
        <Grid item xs={11} sm={8} lg={4}>
          <CommentList comments={comments} fetchComments={fetchComments} playComment={playComment} />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default CommentApp;
