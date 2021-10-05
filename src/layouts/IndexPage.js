import React from 'react';
import content from '../../contents/home-page/home.yml';
import { NewsPreviewSection } from './home/NewsPreviewSection.js';
import { StrategySection } from './home/StrategySection.js';
import { BenefitSection } from './home/BenefitSection.js';

export const IndexPage = () => (
  <>
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <StrategySection />
    <BenefitSection />
    <NewsPreviewSection />
  </>
);
