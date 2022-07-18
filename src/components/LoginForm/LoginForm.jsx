import "./LoginForm.css";

import LabeledInput from "../LabeledInput/LabeledInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/hooks/useFormWithValidation";
import { useContext, useState } from "react";
import MainApi from "../../utils/MainApi";
import { AuthContext } from "../../utils/authContext";

const LoginForm = () => {
  const navigation = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);
  const { values, handleChange, resetForm } = useFormWithValidation();
  const [apiError, setApiError] = useState("");
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const { token } = await MainApi.login(values);
      localStorage.setItem("token", token);
      const user = await MainApi.getUser(token);
      setCurrentUser({ ...user, token });
      resetForm();
      navigation("/movies");
    } catch (err) {
      const { message } = err;
      setApiError(message);
      console.log(err);
    }
  };

  return (
    <form className="login" onSubmit={handleLogin}>
      <h1 className="login__title">Рады видеть!</h1>
      <div className="login__fields-container">
        <ul className="login__fields">
          <li>
            <LabeledInput
              label="E-mail"
              name="email"
              type="email"
              required
              value={values?.email || ""}
              onChange={handleChange}
            />
          </li>
          <li>
            <LabeledInput
              name="password"
              label="Пароль"
              type="password"
              required
              value={values?.password || ""}
              onChange={handleChange}
            />
          </li>
        </ul>
        {apiError && <p className="login__error">{apiError}</p>}
      </div>
      <div className="login__links-container">
        <button type="submit" className="login__submit">
          Войти
        </button>
        <p className="login__redirect">
          Ещё не зарегистрированы?
          <Link className="login__link" to="/signup">
            Регистрация
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
