import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../src/components/Grid/GridContainer.js";
import GridItem from "../../src/components/Grid/GridItem.js";
import Button from "../../src/components/CustomButtons/Button.js";
import Card from "../../src/components/Card/Card.js";
import CardBody from "../../src/components/Card/CardBody.js";
import CardFooter from "../../src/components/Card/CardFooter.js";

import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/nodePackageStyle.js";


const useStyles = makeStyles(styles);

export default function PackageSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Node.js modules I have authored:</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={`images/sportsdataverse-node.png`} alt="sportsdataverse-node-js" />
              </GridItem>
              <h4 className={classes.cardTitle}>
                sportsdataverse
                <br />
                <small className={classes.smallTitle}>All collegiate and 6 Professional sports - Node.js</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Support for the following types of data from ESPN's endpoints:
                <ul>
                  <li>play-by-play (including shot location data when available)</li>
                  <li>scores</li>
                  <li>schedule</li>
                  <li>standings</li>
                  <li>rankings (not available for professional sports)</li>
                </ul>
                </p>
                <p className={classes.description}>
                Recruiting data from 247Sports available for:
                <ul>
                <li>men's college basketball</li>
                <li>college football</li>
                </ul>
                </p>
                <p className={classes.description}>
                The following sports are available from ESPN:
                <ul>
                <li>College Basketball</li>
                <li>Women's College Basketball</li>
                <li>College Football</li>
                <li>WNBA</li>
                <li>NBA</li>
                <li> NFL</li>
                <li>NHL</li>
                </ul>
                </p>
                <p className={classes.description}>
                All team sports on the NCAA website:
                <ul>
                <li>'football'</li>
                <li>'basketball-men'</li>
                <li>'basketball-women'</li>
                <li>'soccer-men'</li>
                <li>'soccer-women'</li>
                <li>'fieldhockey'</li>
                <li>'volleyball-women'</li>
                <li>'icehockey-men'</li>
                <li>'icehockey-women'</li>
                <li>'baseball' </li>
                <li>'beach-volleyball'</li>
                <li>'lacrosse-men'</li>
                <li>'lacrosse-women'</li>
                <li>'volleyball-men'</li>
                </ul>
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem  xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem  xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={`small/introducing-cbb-npm.png`} alt="cbb-npm-node-js" />
              </GridItem>
              <h4 className={classes.cardTitle}>
                cbb-npm
                <br />
                <small className={classes.smallTitle}>All collegiate - Node.js</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                <i>Was almost immediately deprecated due to massively expanding coverage, misleading name, and turned into the sportsdataverse Node.js module</i>
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
