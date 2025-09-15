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
                    DATA SCIENTIST
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
                Egresado del Bootcamp Ciencia de Datos de Talento Digital.
                Apasionado por la tecnología y enfocado en construir soluciones que muestren el valor de los datos.
                Solido dominio de los principios fundamentales de la ciencia de datos!.
            </p>
        </div>
    );
}

function Projects() {


    return (
        <div className="projects">

            <h1>PROYECTOS DESTACADOS</h1>

            <div className="content-wrapper">
                <div className="image-project">
                    < VerButton />
                </div>

                <div className="cards-container">
                    <div className="card">
                        <h2>BootCamp Ciencia de Datos</h2>
                        <p> Desarrollé y documenté una serie de proyectos de análisis de datos y aprendizaje automático como parte del bootcamp. En estos proyectos, 
                            utilicé Python y sus librerías esenciales, como Pandas y NumPy para la manipulación y limpieza de datos, y Scikit-learn para la creación de modelos predictivos.
                            El flujo de trabajo que seguí en cada proyecto incluyó:
                            Análisis Exploratorio de Datos (EDA): Empleé Matplotlib y Seaborn para visualizar patrones, detectar anomalías y entender la distribución de los datos.
                            Ingeniería de Características: Preparé los datos para el modelado, creando y seleccionando variables relevantes para mejorar el rendimiento de los modelos.
                            Modelado y Evaluación: Entrené y evalué diferentes modelos de machine learning, como regresión lineal y clasificación, utilizando métricas como el error cuadrático medio (RMSE) 
                            y la exactitud. Todo el código de estos proyectos se gestionó con Git y está disponible en mi repositorio de GitHub, 
                            lo que demuestra mi habilidad para seguir las mejores prácticas de desarrollo y documentar mi trabajo de manera clara y organizada.
                        </p>
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

function VerButton() {
    const githubUrl = "https://github.com/severomobile/android_evaluacion_6.git";

    return (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="proyecto-link">
            <button className="proyecto-button">Ver Proyecto</button>
        </a>
    );
}

export default App;



