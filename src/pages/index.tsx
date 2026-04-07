import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type CategoryItem = {
  title: string;
  emoji: string;
  description: string;
  link: string;
};

const categories: CategoryItem[] = [
  {
    title: 'Kubernetes',
    emoji: '☸️',
    description: 'Certificações, componentes do cluster, e fundamentos do Kubernetes',
    link: '/docs/kubernetes',
  },
  {
    title: 'Istio',
    emoji: '🔷',
    description: 'Service mesh, observabilidade e gerenciamento de tráfego',
    link: '/docs/istio',
  },
  {
    title: 'Kyverno',
    emoji: '📋',
    description: 'Policy as Code para Kubernetes',
    link: '/docs/kyverno',
  },
];

function CategoryCard({title, emoji, description, link}: CategoryItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.categoryCard}>
        <div className={styles.categoryEmoji}>{emoji}</div>
        <Heading as="h3" className={styles.categoryTitle}>{title}</Heading>
        <p className={styles.categoryDescription}>{description}</p>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo à ${siteConfig.title}`}
      description="Wiki pessoal de estudos e anotações sobre tecnologia, cloud native, e certificações">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <div className="container">
          <div className={styles.categoriesSection}>
            <Heading as="h2" className={styles.sectionTitle}>
              📚 Categorias de Anotações
            </Heading>
            <div className="row">
              {categories.map((props, idx) => (
                <CategoryCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
