import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CommonInfoForm = () => {
  const [pwValueVisible, setPwValueVisible] = useState(false);
  const [profile, setProfil] = useState["Enseignant", "Parent", "Association"]
  const [errorMsgPW, setErrorMsgPW] = useState("");

  const validPassword = () => {
    let firstPW;
    let secondPW;
    if (firstPW != secondPW) {
      setErrorMsgPW("Les mots de passe ne correspondent pas");
    } else {
      setErrorMsgPW("Les mots de passe correspondent");
    }
  };

  const showPassword = (e) => {
    e.preventDefault();
    setPwValueVisible(!pwValueVisible);
  };

  return (
    <>
    
    </>
  );
};

export default CommonInfoForm;
