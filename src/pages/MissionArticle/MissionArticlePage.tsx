import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleHeader from '../../components/MissionArticle/ArticleHeader';
import ArticleSection from '../../components/MissionArticle/ArticleSection';
import ResultsTable from '../../components/MissionArticle/ResultsTable';
import ArticleNavigation from '../../components/MissionArticle/ArticleNavigation';
import { NASA_ARTICLES } from '../../data/mission';
import './MissionArticlePage.css';

const MissionArticlePage: React.FC = () => {
  const { missionId } = useParams<{ missionId: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showQuizButton, setShowQuizButton] = useState(false);

  const articleId = `nasa-article-${missionId || 'earth-start'}`;
  const article = NASA_ARTICLES[articleId];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(Math.min(progress, 100));
        
        if (progress >= 80) {
          setShowQuizButton(true);
        }
      }
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener('scroll', handleScroll);
      return () => content.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleBackToMap = () => {
    navigate('/starmap');
  };

  const handleStartQuiz = () => {
    navigate(`/quiz/${missionId}`);
  };

  if (!article) {
    return (
      <div className="mission-article-page mission-article-page--error">
        <div className="mission-article-page__error">
          <h2>Artículo no encontrado</h2>
          <button onClick={handleBackToMap}>Volver al Mapa Estelar</button>
        </div>
      </div>
    );
  }

  // Renderizar contenido específico según el missionId
  const renderArticleContent = () => {
    // Para bone-loss, usar el contenido estructurado que ya tienes
    if (missionId === 'bone-loss') {
      return (
        <>
          <div className="mission-article-page__hero">
            <h1 className="mission-article-page__title">
              MISIÓN ESPACIAL: ¿Por qué los huesos de la pelvis se debilitan en gravedad cero?
            </h1>
            <div className="mission-article-page__subtitle">
              <span className="mission-article-page__badge">🦴 INVESTIGACIÓN CIENTÍFICA</span>
              <span className="mission-article-page__reading-time">⏱️ {article.readingTime} min de lectura</span>
            </div>
          </div>

          <ArticleSection
            icon="🎯"
            title="OBJETIVO DE LA MISIÓN"
            className="mission-article-page__section--objective"
          >
            <p>
              Descubrir cómo la <strong>microgravedad</strong> (o sea, estar en el espacio sin gravedad) 
              afecta los huesos de la pelvis de ratones, para así entender qué pasa con los huesos 
              humanos cuando flotan en el espacio.
            </p>
          </ArticleSection>

          <ArticleSection
            icon="🔬"
            title="HIPÓTESIS DE LA MISIÓN"
            className="mission-article-page__section--hypothesis"
          >
            <p>
              Los científicos sospechaban que la pérdida de hueso en el espacio (microgravedad) 
              no solo es por los "comedores de hueso" llamados <strong>osteoclastos</strong> 
              (que destruyen hueso), sino que también participan:
            </p>
            <ul className="mission-article-page__list">
              <li>
                <strong>Osteólisis osteocítica:</strong> los osteocitos (células del hueso) 
                también estarían destruyendo partes del hueso.
              </li>
              <li>
                <strong>Inhibición del ciclo celular de los osteoblastos:</strong> los osteoblastos 
                (células que construyen hueso) dejarían de multiplicarse o funcionar bien, por una 
                proteína llamada CDKN1a/p21.
              </li>
            </ul>
          </ArticleSection>

          <ArticleSection
            icon="🚀"
            title="CÓMO HICIERON EL EXPERIMENTO"
            className="mission-article-page__section--experiment"
          >
            <div className="mission-article-page__experiment-steps">
              <div className="mission-article-page__step">
                <div className="mission-article-page__step-number">1</div>
                <p>
                  Usaron ratones hembra de cierta edad y los llevaron en la misión espacial 
                  (15 días en el transbordador espacial).
                </p>
              </div>
              <div className="mission-article-page__step">
                <div className="mission-article-page__step-number">2</div>
                <p>
                  Compararon esos ratones en microgravedad con ratones normales en la Tierra.
                </p>
              </div>
              <div className="mission-article-page__step">
                <div className="mission-article-page__step-number">3</div>
                <p>
                  Midieron muchas cosas: volumen de hueso, grosor, actividad de osteoclastos, 
                  tamaño de "lagunas" en hueso (huecos donde están los osteocitos), expresión 
                  de genes relacionados con destrucción y construcción de hueso.
                </p>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection
            icon="📊"
            title="RESULTADOS (como premios y retos)"
            className="mission-article-page__section--results"
          >
            <p className="mission-article-page__results-intro">
              Imagina que los huesos son <strong>castillos</strong>, y las células que los destruyen 
              son <strong>dragones</strong>, y las que los reparan son <strong>constructores</strong>:
            </p>
            <ResultsTable />
          </ArticleSection>

          <ArticleSection
            icon="✅"
            title="CONCLUSIÓN DE LA MISIÓN"
            className="mission-article-page__section--conclusion"
          >
            <div className="mission-article-page__conclusion-points">
              <div className="mission-article-page__conclusion-point">
                <div className="mission-article-page__conclusion-icon">🐉</div>
                <p>
                  En microgravedad, no solo los <strong>"dragones"</strong> (osteoclastos) atacan 
                  el castillo (hueso), sino que los propios habitantes (osteocitos) también hacen 
                  daño al alrededor (osteólisis osteocítica).
                </p>
              </div>
              <div className="mission-article-page__conclusion-point">
                <div className="mission-article-page__conclusion-icon">🔨</div>
                <p>
                  Además los <strong>"constructores"</strong> (osteoblastos) no se multiplican ni 
                  reparan como deberían, debido a que un guardián llamado CDKN1a/p21 los obliga a pausarse.
                </p>
              </div>
              <div className="mission-article-page__conclusion-point">
                <div className="mission-article-page__conclusion-icon">📉</div>
                <p>
                  Todo eso hace que los huesos de la pelvis (y probablemente otros huesos) pierdan 
                  masa y grosor más rápido de lo que pensaban.
                </p>
              </div>
              <div className="mission-article-page__conclusion-point">
                <div className="mission-article-page__conclusion-icon">👨‍🚀</div>
                <p>
                  Este conocimiento es útil para <strong>astronautas</strong>, para saber cómo 
                  proteger sus huesos si pasan mucho tiempo en el espacio.
                </p>
              </div>
            </div>
          </ArticleSection>

          <div className="mission-article-page__reference">
            <h3>📚 Fuente Científica</h3>
            <a 
              href={article.sourceUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="mission-article-page__reference-link"
            >
              Microgravity induces pelvic bone loss through osteoclastic activity, 
              osteocytic osteolysis, and osteoblastic cell cycle inhibition by CDKN1a/p21
            </a>
          </div>
        </>
      );
    }

    // Para otros artículos, renderizar el contenido desde article.content
    return (
      <>
        <div className="mission-article-page__hero">
          <h1 className="mission-article-page__title">
            {article.title}
          </h1>
          <div className="mission-article-page__subtitle">
            <span className="mission-article-page__badge">🚀 EXPLORACIÓN ESPACIAL</span>
            <span className="mission-article-page__reading-time">⏱️ {article.readingTime} min de lectura</span>
          </div>
        </div>

        <ArticleSection
          icon="📖"
          title="CONTENIDO"
          className="mission-article-page__section--objective"
        >
          <div 
            className="mission-article-page__markdown-content"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
          />
        </ArticleSection>

        {article.sourceUrl && (
          <div className="mission-article-page__reference">
            <h3>📚 Fuente</h3>
            <a 
              href={article.sourceUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="mission-article-page__reference-link"
            >
              {article.sourceUrl}
            </a>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="mission-article-page">
      <div className="mission-article-page__background">
        <div className="mission-article-page__stars">
          {Array.from({ length: 150 }, (_, i) => (
            <div
              key={i}
              className="mission-article-page__star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        <div className="mission-article-page__nebula mission-article-page__nebula--orange" />
        <div className="mission-article-page__nebula mission-article-page__nebula--purple" />
      </div>

      <ArticleHeader 
        missionId={missionId || 'earth-start'}
        onBack={handleBackToMap}
      />

      <div ref={contentRef} className="mission-article-page__content">
        <div className="mission-article-page__container">
          {renderArticleContent()}
        </div>
      </div>

      <div className="mission-article-page__progress-bar">
        <div 
          className="mission-article-page__progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="mission-article-page__progress-label">
          {Math.round(scrollProgress)}%
        </div>
      </div>

      {showQuizButton && (
        <button 
          className="mission-article-page__quiz-button"
          onClick={handleStartQuiz}
        >
          <span className="mission-article-page__quiz-icon">📝</span>
          <span className="mission-article-page__quiz-text">INICIAR CUESTIONARIO</span>
        </button>
      )}

      <ArticleNavigation 
        onBack={handleBackToMap}
        onNext={handleStartQuiz}
        showNext={showQuizButton}
      />
    </div>
  );
};

export default MissionArticlePage;