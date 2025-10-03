import React from "react";

// Komponen kecil
function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "10px",
        objectFit: "cover", // penting biar foto tidak gepeng
      }}
    />
  );
}


function UserInfo({ name }) {
  return <h4 style={{ margin: 0 }}>{name}</h4>;
}

function CommentText({ text }) {
  return <p style={{ margin: 0 }}>{text}</p>;
}

// Komponen utama
function Comment({ author, text, avatarUrl }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        maxWidth: "400px"
      }}
    >
      <Avatar src={avatarUrl} alt={author} />
      <div>
        <UserInfo name={author} />
        <CommentText text={text} />
      </div>
    </div>
  );
}

export default Comment;
