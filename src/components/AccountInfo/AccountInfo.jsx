import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/authContext";
import { useFormWithValidation } from "../../utils/hooks/useFormWithValidation";
import MainApi from "../../utils/MainApi";
import "./AccountInfo.css";

const AccountInfo = () => {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { values, setValues, handleChange, isValid } = useFormWithValidation();

  const [isEditing, setIsEditing] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const { name, email } = currentUser;
    setValues({ name, email });
  }, [currentUser, setValues]);

  const handleUserInfoUpdate = async () => {
    try {
      const res = await MainApi.updateUser(values, currentUser.token);
      setCurrentUser((user) => {
        return { ...user, ...res };
      });
      setIsEditing(false);
    } catch (err) {
      const { message } = err;
      setApiError(message);
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentUser({});
    navigate("/");
  };

  return (
    <section className="account-info">
      <h2 className="account-info__hello">{`Привет, ${currentUser?.name}!`}</h2>
      <form>
        <ul className="account-info__fields">
          <li className="account-info__field">
            <p className="account-info__key">Имя</p>
            <input
              type="text"
              name="name"
              required
              pattern="[A-Za-zА-Яа-я -]{2,30}"
              value={values?.name || ""}
              onChange={handleChange}
              className="account-info__value"
              disabled={!isEditing}
            />
          </li>
          <li className="account-info__field">
            <p className="account-info__key">E-mail</p>
            <input
              className="account-info__value"
              name="email"
              type="email"
              required
              value={values?.email || ""}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </li>
        </ul>
      </form>
      <div className="account-info__buttons">
        {!isEditing && (
          <>
            <button
              type="button"
              className="account-info__button"
              onClick={() => setIsEditing(true)}
            >
              Редактировать
            </button>
            <button
              type="button"
              className="account-info__button account-info__button_type_logout"
              onClick={handleLogout}
            >
              Выйти из аккаунта
            </button>
          </>
        )}
        {isEditing && (
          <>
            {apiError && (
              <p className="account-info__input-error">{apiError}</p>
            )}
            <button
              type="button"
              className="account-info__button account-info__button_type_save"
              disabled={!isValid}
              onClick={handleUserInfoUpdate}
            >
              Сохранить
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default AccountInfo;
