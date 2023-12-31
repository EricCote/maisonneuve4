import { Link } from 'react-router-dom';
import Menu from './Menu';

const decks = [
  {
    route: 'install',
    title: 'Installation',
    description: 'Comment installer votre environnement pour cette formation',
    language: 'fr',
  },
  {
    route: 'install',
    title: 'Install',
    description: 'How to install your training',
    language: 'en',
  },
  {
    route: 'plan',
    title: 'Plan de formation',
    description: 'Plan pour la formation React',
    language: 'fr',
  },
  {
    route: '1-fundamentals',
    title: 'React Fundamentals',
    description: 'Your first steps with React',
    language: 'en',
  },
  {
    route: '1-fundamentals',
    title: 'Fondements de React',
    description: 'Vos premiers pas en React',
    language: 'fr',
  },
  {
    route: '2-components',
    title: 'Composants',
    description: 'Découper application en composants',
    language: 'fr',
  },

  {
    route: '3-react-router',
    title: 'React Router',
    description: 'Introducing React Router',
    language: 'en',
  },
  {
    route: '3-react-router',
    title: 'Routage React',
    description: 'Introduction à React Router',
    language: 'fr',
  },
  {
    route: '4-state',
    title: 'État',
    description: "Gérer l'état (state) de vos apps",
    language: 'fr',
  },
  {
    route: '5-loading',
    title: 'Appeler services',
    description: 'Appeler des API REST avec React',
    language: 'fr',
  },
  {
    route: '6-manage-state',
    title: 'État avancé',
    description: 'Appeler des API distantes',
    language: 'fr',
  },
  {
    route: '7-advanced',
    title: 'Patrons évolués',
    description: 'Comment utiliser les patrons évolués de React',
    language: 'fr',
  },
];

const languages = [
  { language: 'Français', shortName: 'fr' },
  { language: 'English', shortName: 'en' },
];

export default function Home() {
  document.documentElement.lang = 'fr';
  return (
    <>
      <Menu />
      <h1 className='my-5'>Formation React</h1>
      {languages
        .filter((lang) => lang.shortName === 'fr')
        .map((lang) => (
          <div key={lang.shortName}>
            <div>
              <h3></h3>
              {decks
                .filter((deck) => deck.language === lang.shortName)
                .map((deck) => (
                  <div key={deck.title}>
                    <h5>
                      <Link to={`decks/${lang.shortName}/${deck.route}`}>
                        {deck.title}
                      </Link>
                    </h5>
                    <p>{deck.description}</p>
                  </div>
                ))}
            </div>
            <hr className='my-5' />
          </div>
        ))}

      <p>
        Please visit: <a href='https://www.reactacademy.live'>React Academy</a>
      </p>
    </>
  );
}
