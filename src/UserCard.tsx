import React, { useState } from 'react';
import Button from './Button';

type UserCardProps = {
    name: string;
    email: string;
    onConfirm: () => Promise<void>; 
};

export const UserCard: React.FC<UserCardProps> = ({ name, email, onConfirm }) => {
    const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = async () => {
    await onConfirm();
    setConfirmed(true);
  };
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}>
            <h3>{name}</h3>
            <p>{email}</p>
            {!confirmed ? (
        <Button label="Conferma" onClick={handleConfirm} autoDisable />
      ) : (
        <p style={{ color: 'green', fontWeight: 'bold' }}>Utente confermato</p>
      )}
        </div>
    );
}
export default UserCard;