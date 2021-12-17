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
