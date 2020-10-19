import React, { useState } from 'react';
import './styles.scss';
import ImageLoader from './components/Loader/ImageLoader';
import InfoLoader from './components/Loader/InfoLoader';
import { makeRequest } from '../../core/utils/request';

type User = {
    avatar_url: string;
    company: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    blog: string;
    created_at: string;
}

const Search = () => {
    const [user, setUser] = useState<User>(
        {
            avatar_url: '',
            company: 'string',
            public_repos: 0,
            followers: 0,
            following: 0,
            location: '',
            blog: '',
            created_at: ''
        }
    );

    const [name, setName] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        makeRequest({ url: `/${name}` })
            .then(response => setUser(response.data));
    }


    return (
        <div className="search-container">
            <div className="search-input-content">
                <h3 className="search-input-title">
                    Encontre um perfil Github
                </h3>
                <form onSubmit={handleSubmit}>
                    <input
                        value={name}
                        type="text"
                        className="search-input"
                        placeholder="Usuário Github"
                        onChange={handleOnChange}
                    />
                    <button className="btn search-button">
                        Encontrar
                    </button>
                </form>
            </div>
            <div className="search-info-content">
                <div>
                    <img
                        src={user.avatar_url}
                        alt="github-avatar"
                        className="search-info-image"
                    />
                    <button type="button" className="btn search-info-button">
                        Ver perfil
                    </button>
                </div>
                <div className="info-content">
                    <div className="info-tags">
                        <div className="info-tag">
                            Repositórios públicos: {user.public_repos}
                        </div>
                        <div className="info-tag">
                            Seguidores: {user.followers}
                        </div>
                        <div className="info-tag">
                            Seguindo: {user.following}
                        </div>
                    </div>
                    <div className="search-info">
                        <h3 className="search-info-title">
                            Informações
                        </h3>
                        <ul className="search-info-list">
                            <li>
                                Empresa: <strong>{user.company}</strong> 
                            </li>
                            <li>
                                Website/Blog: <strong>{user.blog}</strong> 
                            </li>
                            <li>
                                Localidade: <strong>{user.location}</strong> 
                            </li>
                            <li>
                                Membro desde: <strong>{user.created_at}</strong> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="search-info-loader">
                <ImageLoader />
                <InfoLoader />
            </div>


        </div>
    );
}

export default Search;