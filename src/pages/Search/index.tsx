import "./styles.css";
import ResultCard from "../../components/ResultCard";
import { useState } from "react";
import axios from "axios";
import Button from "../../components/Button";

type FormData = {
  login: string;
};

type Profile = {
  url: string;
  followers: string;
  name: string;
  location: string;
  avatar_url: string;
};

const Search = () => {
  const [formData, setFormData] = useState<FormData>({
    login: "",
  });

  const [profile, setProfile] = useState<Profile>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      });
  };

  return (
    <div className="profile-search-container">
      <div className="container search-container">
        <h1 className="text-title">Encontre um perfil no Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={formData.login}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <div className="btn">
              <Button text="Encontrar" />
            </div>
          </div>
        </form>
      </div>

      {profile && (
        <>
          <div className="container card-github">
            <div className="card-img">
              <img src={profile.avatar_url} alt={profile.name} />
            </div>
            <div className="card-info">
              <h6 className="text-primary">Informações</h6>
              <ResultCard title="Perfil: " description={profile?.url} />
              <ResultCard
                title="Seguidores: "
                description={profile?.followers}
              />
              <ResultCard
                title="Localidade: "
                description={profile?.location}
              />
              <ResultCard title="Nome: " description={profile?.name} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
