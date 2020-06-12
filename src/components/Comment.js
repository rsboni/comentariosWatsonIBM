import React from "react";

//dependencias do Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Button from "@material-ui/core/Button";

export default function Comment({ text, playComment }) {
  return (
    <div>
      <ListItem style={{ minHeight: "64px" }}>
        {/* Texto do comentário */}
        <ListItemText style={{ width: "80%" }}>{text}</ListItemText>
        <div style={{ display: "inline-block" }}>
          {/* Botao Ouvir */}
          <Button
            onClick={() => playComment(text)}
            style={{ marginLeft: "1rem" }}
            variant="contained"
            color="default"
            size="small"
            endIcon={<PlayArrowIcon aria-label="ouvir" />}
          >
            Ouvir
          </Button>
        </div>
      </ListItem>
    </div>
  );
}
