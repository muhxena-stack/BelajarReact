import React from "react";

interface UserCardProps {
  name: string;
  age: number;
  isMember: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isMember }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        width: "180px",
      }}
    >
      <h3>{name}</h3>
      <p>Umur: {age}</p>
      <p>Status: {isMember ? "Member Aktif" : "Non-member"}</p>
    </div>
  );
};

export default UserCard;
