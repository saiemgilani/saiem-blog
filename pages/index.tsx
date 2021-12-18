import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'

// @material-ui/icons

// core components
import { Footer } from '../src/components/Footer';
import { Grid, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Button from '../src/components/CustomButtons/Button.js';
import Parallax from '../src/components/Parallax/Parallax.js';
import Head from 'next/head'
import styles from '../styles/Shared.module.css'
import {BASE_URL, NAME, NAME_AND_DOMAIN } from '../src/types/constants'
import Link from 'next/link'

// Sections for this page
import NodePackageSection from '../pages-sections/LandingPage-Sections/NodePackageSection';
import ProductSection from '../pages-sections/LandingPage-Sections/ProductSection.js';
import PythonPackageSection from '../pages-sections/LandingPage-Sections/PythonPackageSection';

import RPackageSection from '../pages-sections/LandingPage-Sections/RPackageSection';
import DataPackageSection from '../pages-sections/LandingPage-Sections/DataPackageSection';
import WorkSection from '../pages-sections/LandingPage-Sections/WorkSection.js';


export default function LandingPage(props) {
  const large = useMediaQuery('(min-width:700px)')
  const { ...rest } = props;
  return (
      <>
        <Head>
          <title>{NAME}: Building the SportsDataverse</title>
          <meta
            name="description"
            content={`${NAME} is the personal page of Saiem Gilani, giving updates on the SportsDataverse.`}
          />
        </Head>
        <Grid container>
        <Grid item xs={12} className={styles.headings}>
          <Box p={5}>
            <Typography variant={large ? 'h1' : 'h4'}>{NAME_AND_DOMAIN}</Typography>
            <Typography className={styles.secondHeading} variant={large ? 'h3' : 'h6'}>
             Building the SportsDataverse.
            </Typography>
          </Box>
        </Grid>
        </Grid>
        <Box p={2}>
        <article class="markdown-body entry-content container-lg f5" itemprop="text">
          <Typography variant={'h2'}>Hi, I'm Saiem! ML Engineer</Typography>
          <p dir="auto">I gave a presentation on the projects below at the <a href="https://www.stat.cmu.edu/cmsac/conference/2021/" rel="nofollow">Carnegie Mellon Sports Analytics Conference</a>. The paper I wrote for the conference was selected as the winner for the Data and Software contribution, Open Track for their reproducible research competition.</p>
          <p dir="auto">The conference materials can be found here:</p>
          <ul dir="auto">
          <li><a href="https://saiemgilani.github.io/The_SportsDataverse_Initiative/" rel="nofollow">Slides</a></li>
          <li><a href="https://github.com/saiemgilani/The_SportsDataverse_Initiative">Repository</a></li>
          <li><a href="https://www.stat.cmu.edu/cmsac/conference/2021/assets/pdf/SaiemGilani.pdf" rel="nofollow">Paper</a></li>
          </ul>
          <p dir="auto">Honestly, I am working on so many sports data projects that should have only taken me a couple weeks.</p>
          <ul dir="auto">
          <li><a href="https://github.com/saiemgilani/sportsdataverse">sportsdataverse node.js source</a> (<a href="https://saiemgilani.github.io/sportsdataverse/" rel="nofollow">Docs</a>)</li>
          <li><a href="https://github.com/saiemgilani/sportsdataverse-py">sportsdataverse-py source</a> (<a href="https://py.sportsdataverse.org/" rel="nofollow">Docs</a>, <a href="https://pypi.org/project/sportsdataverse/" rel="nofollow">PyPI</a>)</li>
          <li><a href="https://github.com/saiemgilani/cfbfastR">cfbfastR source</a> (<a href="https://saiemgilani.github.io/cfbfastR/" rel="nofollow">Docs</a>, <a href="https://github.com/saiemgilani/cfbfastR-data">Data</a>)</li>
          <li><a href="https://github.com/saiemgilani/hoopR">hoopR source</a> (<a href="https://saiemgilani.github.io/hoopR/" rel="nofollow">Docs</a>, <a href="https://github.com/saiemgilani/hoopR-data">Data</a>)</li>
          <li><a href="https://github.com/saiemgilani/wehoop">wehoop source</a> (<a href="https://saiemgilani.github.io/wehoop/" rel="nofollow">Docs</a>, <a href="https://github.com/saiemgilani/wehoop-data">Data</a>)</li>
          <li><a href="https://github.com/saiemgilani/recruitR">recruitR source</a> (<a href="https://saiemgilani.github.io/recruitR/" rel="nofollow">Docs</a>)</li>
          <li><a href="https://github.com/saiemgilani/usfootballR">usfootballR source</a> (<a href="https://saiemgilani.github.io/usfootballR/" rel="nofollow">Docs</a>)</li>
          <li><a href="https://github.com/saiemgilani/sportsdataverse-nhl">@sportsdataverse/nhl</a></li>
          </ul>
          <p dir="auto">Projects I contribute to:</p>
          <ul dir="auto">
          <li><a href="https://github.com/billpetti/baseballr">baseballr source</a> (<a href="https://billpetti.github.io/baseballr/" rel="nofollow">Docs</a>)</li>
          <li><a href="https://github.com/benhowell71/fastRhockey">fastRhockey source</a> (<a href="https://benhowell71.github.io/fastRhockey/" rel="nofollow">Docs</a>)</li>
          <li><a href="https://github.com/ehess/ncaascrapR">ncaascrapR source</a> (<a href="https://ehess.github.io/ncaascrapR/" rel="nofollow">Docs</a>)</li>
          </ul>
          <p dir="auto">They generally fall under the umbrella of the concept of the <a href="https://sportsdataverse.org/" title="The home page of the SportsDataverse Organization" rel="nofollow">SportsDataverse</a>. The general goal is to make sports data significantly more open and accessible, streamlining the process of gathering public data for research.</p>
        </article>
</Box>
        <div className={classNames(styles.main, styles.mainRaised)}>
          <div className={styles.headings}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}  className={styles.headings}>
          <Box p={2}>
            <Typography variant={'h3'}>Python packages</Typography>
          </Box>
            <PythonPackageSection />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}  className={styles.headings}>
          <Box p={2}>
            <Typography variant={'h3'}>Node.js modules</Typography>
          </Box>
            <NodePackageSection />
            </Grid>
            </Grid>
            <RPackageSection />
            <DataPackageSection />
            <ProductSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </>
    );
    }
