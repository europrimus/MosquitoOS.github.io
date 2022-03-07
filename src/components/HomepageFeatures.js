import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Auto-constructible',
    Svg: require('../../static/img/tools.svg').default,
    description: (
      <>
      	Le Mosquito OS se veut un véhicule quoique complexe et performant, accessible à l'auto-construction.
	    </>
    ),
  },
  {
    title: 'Opensource',
    Svg: require('../../static/img/osh-logo.svg').default,
    description: (
      <>
	    Dès l'origine du projet, la conception du Mosquito a été partagé au plus grand nombre. Tous les contenus et documents du projet sont sous licences "libres".
      </>
    ),
  },
  {
    title: 'Résilient',
    Svg: require('../../static/img/plant.svg').default,
    description: (
      <>
	    Ses matières premières et sa capacité à être répararé, recylcé, amélioré en font le véhicule idéal pour tendre vers plus d'autonomie et de résilience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
