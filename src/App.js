import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Banner />
            <AboutMe />
            <Projects />
        </div>
    );
}

function Banner() {
    return (
        <div className="banner">
            <div className="rectangulo">
                <h1 className="iam">
                    I AM
                </h1>
                <h1 className="jose">
                    JOSÉ RIVERA M.
                </h1>
                <h2 className="developer">
                    SOFTWARE DEVELOPER
                </h2>
                <UfoButton />
            </div>
        </div>
    );
}

function AboutMe() {
    return (
        <div className="aboutme">
            <h1>ABOUT ME</h1>
            <p className="sobremi">
                Egresado del Bootcamp Desarrollo de Aplicaciones Móviles Android Trainee de Talento Digital.
                Apasionado por la tecnología y enfocado en construir soluciones innovadoras para dispositivos móviles.
                Solido dominio de los principios fundamentales del desarrollo móvil Android.
            </p>
        </div>
    );
}

function Projects() {
    const githubUrl = "https://github.com/severomobile/android_evaluacion_6.git";

    return (
        <div className="projects">

            <h1>PROYECTOS DESTACADOS</h1>

            <div className="content-wrapper">
                <div className="image-project">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <img src="/images/proyecto_alke.svg" alt="Imagen del proyecto" className="project-image" />
                    </a>
                </div>

                <div className="cards-container">
                    <div className="card">
                            <h2>Proyecto Wallet</h2>
                            <p>Desarrollé una aplicación Android que simulaba una billetera virtual para realizar ingresos y
                                depósitos de dinero. Utilicé el IDE Android Studio y programé la aplicación en Kotlin, gestionando el código
                                con Git para control de versiones. Implementé una arquitectura MVVM y utilicé Retrofit para la comunicación
                                con una API REST, asegurando una integración eficiente de servicios externos. Diseñé y desarrollé la
                                interfaz de usuario utilizando XML, optimizando consultas para funciones clave como la creación de usuarios, gestión
                                de cuentas y ejecución de transacciones.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

function UfoButton() {
    const githubUrl = "https://github.com/severomobile";

    return (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <button className="ufo-button">GitHub</button>
        </a>
    );
}

export default App;



