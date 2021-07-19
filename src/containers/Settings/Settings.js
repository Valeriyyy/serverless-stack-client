import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { onError } from "../../libs/errorLib";
import config from "../../config";

export default Settings = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const billUser = async (details) => {
    return await API.post("notes", "/billing", {
      body: details,
    });
  };

  return <div className="Settings"></div>;
};
