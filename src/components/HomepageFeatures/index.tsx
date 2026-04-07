import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Certificações Cloud Native',
    emoji: '🎓',
    description: (
      <>
        Materiais de estudo para as certificações Kubernetes: CKA, CKAD, CKS, KCNA e KCSA.
        Preparação completa para alcançar o status de Kubestronaut!
      </>
    ),
  },
  {
    title: 'Arquitetura e Componentes',
    emoji: '⚙️',
    description: (
      <>
        Documentação detalhada sobre os componentes do Kubernetes, desde o Control Plane
        até os Worker Nodes. Entenda como tudo funciona por baixo dos panos.
      </>
    ),
  },
  {
    title: 'Sempre em Expansão',
    emoji: '🌌',
    description: (
      <>
        Como uma nebulosa cósmica, esta wiki está em constante crescimento.
        Novas anotações aparecem automaticamente conforme eu adiciono arquivos.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
