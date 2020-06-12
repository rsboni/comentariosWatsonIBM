import { useState } from "react";
import axios from "axios";

// Hooks para manejar os comentários e comunicar com a APi
// retorna um objeto {comments, fetchComments, addComment, playComment}
export default () => {
  const [comments, setComments] = useState([]);
  
  //Setup da API
  const API = axios.create({
    baseURL: `http://localhost:4000/`,
  });

  return {
    comments,
    fetchComments: () => {
      API.get("comments").then((res) => setComments(res.data));
    },
    addComment: (newText) => {
      API.post(`comments/add?text=${newText}`).then((res) => {
        console.log(res.data);
        setComments(res.data);
      });
    },
    playComment: (text) => {
      axios({
        method: "get",
        url: `http://localhost:4000/synthesize?text=${text}`,
        responseType: "blob",
      })
        .then((response) => {
          var blob = new Blob([response.data], { type: "audio/mp3" });
          var url = window.URL.createObjectURL(blob);
          window.audio = new Audio();
          window.audio.src = url;
          window.audio.play();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
};
