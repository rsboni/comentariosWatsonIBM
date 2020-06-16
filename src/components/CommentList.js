import React from "react";

//Dependencias do Material UI
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Comment from "../components/Comment";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ComentList({
  comments,
  fetchComments,
  playComment,
  isLoading,
}) {
  // Pegar todos os cometários
  if (!comments.length) {
    fetchComments();
  }

  return (
    <Paper>
      <List>
        {isLoading === "all" ? (
          <CircularProgress />
        ) : (
          comments.map((comment, i) => (
            <div key={`${comment.id}-container`}>
              {/* // Comentario */}
              <Comment
                {...comment}
                key={comment.id}
                playComment={playComment}
                isLoading={isLoading}
                id={comment.id}
              />
              {/* Barra de divisão */}
              {i < comments.length - 1 && (
                <Divider key={`${comment.id}-divider`} />
              )}
            </div>
          ))
        )}
      </List>
    </Paper>
  );
}
