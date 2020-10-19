import React, { useState } from 'react';
import './styles.scss';
import ImageLoader from './components/Loader/ImageLoader';
import InfoLoader from './components/Loader/InfoLoader';
import { makeRequest } from '../../core/utils/request';
import formatDate from '../../core/utils/formatDate';

type User = {
    avatar_url?: string;
    company?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    location?: string;
    blog?: string;
    created_at?: string;
    html_url?: string;
}

const Search = () => {
    const [user, setUser] = useState<User>();

    const [name, setName] = useState('');
    const [isLoader, setIsLoader] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoader(true);
        makeRequest({ url: `/${name}` })
            .then(response => {
                setUser(response.data);
                setIsLoader(false);
            });
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
            {(isLoader &&
                <div className="search-info-loader">
                    <div className="margin-loader">
                        <ImageLoader />
                    </div>
                    <InfoLoader />
                </div>)
                || (user &&
                    <div className="search-info-content">
                        <div>
                            <img
                                src={user?.avatar_url}
                                alt="github-avatar"
                                className="search-info-image"
                            />
                            <a href={user?.html_url}>
                                <button type="button" className="btn search-info-button">
                                    Ver perfil
                                </button>
                            </a>
                        </div>
                        <div className="info-content">
                            <div className="info-tags">
                                <div className="info-tag">
                                    Repositórios públicos: {user?.public_repos}
                                </div>
                                <div className="info-tag">
                                    Seguidores: {user?.followers}
                                </div>
                                <div className="info-tag">
                                    Seguindo: {user?.following}
                                </div>
                            </div>
                            <div className="search-info">
                                <h3 className="search-info-title">
                                    Informações
                            </h3>
                                <ul className="search-info-list">
                                    <li>
                                        Empresa: <span>{user?.company}</span>
                                    </li>
                                    <li>
                                        Website/Blog: <span>{user?.blog}</span>
                                    </li>
                                    <li>
                                        Localidade: <span>{user?.location}</span>
                                    </li>
                                    <li>
                                        Membro desde: <span>{formatDate(user?.created_at)}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Search;