import "./RegisterForm.css";

import LabeledInput from "../LabeledInput/LabeledInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormWithValidation } from "../../utils/hooks/useFormWithValidation";
import MainApi from "../../utils/MainApi";
import { useContext } from "react";
import { AuthContext } from "../../utils/contexts";

const RegisterForm = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const navigation = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [apiError, setApiError] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setApiError("");
      await MainApi.register(values);
      const { token } = await MainApi.login({
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", token);
      const user = await MainApi.getUser(token);
      setCurrentUser({ ...user, token });
      resetForm();
      navigation("/movies");
    } catch (err) {
      const { message } = err;
      setApiError(message);
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1 className="register__title">Добро пожаловать!</h1>
      <div className="register__fields-container">
        <ul className="register__fields">
          <li>
            <LabeledInput
              label="Имя"
              name="name"
              type="text"
              required
              pattern="[A-Za-zА-Яа-я -]{2,30}"
              error={
                errors?.name &&
                "Имя должно быть от 2 до 30 символов и содержать только латиницу, кириллицу, пробел или дефис."
              }
              value={values?.name || ""}
              onChange={handleChange}
            />
          </li>
          <li>
            <LabeledInput
              label="E-mail"
              name="email"
              type="email"
              required
              value={values?.email || ""}
              onChange={handleChange}
              error={errors?.email}
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
              error={errors?.password}
            />
          </li>
        </ul>
      </div>
      <div className="register__links-container">
        {apiError && <p className="register__error">{apiError}</p>}
        <button type="submit" className="register__submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
        <p className="register__redirect">
          Уже зарегистрированы?
          <Link className="register__link" to="/signin">
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
