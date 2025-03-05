import React, { useState, useEffect } from "react";
import axios from "axios";

export const withUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState(null);
    const [originalUser, setOriginalUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, [userId]);

    const onChangeUser = changes => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await axios.post(`/users/${userId}`, user);
      setOriginalUser(response.data);
      alert("User saved!");
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};