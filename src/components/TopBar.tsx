import React, { ReactElement, useContext } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'
import MoonIcon from '@material-ui/icons/Brightness2Outlined'
import CustomDropdown from '../components/CustomDropdown/CustomDropdown';
import CodeIcon from '@material-ui/icons/Code'
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
import { ToggleThemeContext } from '../theme'
import Link from 'next/link'
import { Tooltip } from '@material-ui/core'
import { NAME_AND_DOMAIN } from '../types/constants'
import Image from 'next/image'
import {
  container,
  hexToRGBAlpha,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth
} from '../../assets/jss/nextjs-material-kit.js';
const useStyles = makeStyles({
  appBar: {
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    padding: '0.3125rem 0',
    marginBottom: '10px',
    color: '#7B1729',
    width: '100%',
    backgroundColor: '#7B1729',
    boxShadow:
      '0 2px 10px 0px rgba(0, 0, 0, 0.12), 0 5px 7px -5px rgba(0, 0, 0, 0.15)',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 'unset'
  },
  absolute: {
    position: 'absolute'
  },
  fixed: {
    position: 'fixed'
  },
  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
  toolbar: {
    paddingLeft: '1%',
  },
  toolbarContent: {
    paddingLeft: 10,
  },
  toolbarRight: {
    right: 0,
    position: 'relative',
    paddingRight: '1%',
  },
  container: {
    ...container,
    minHeight: '45px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap'
  },
})


export const TopBar = (): ReactElement => {
  const trigger = useScrollTrigger()
  const classes = useStyles()
  const { toggleTheme, isDark } = useContext(ToggleThemeContext)

  return (
    <AppBar className={trigger ? classes.hide : classes.show} position="sticky">
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <a>
            <img
              src="/logo/logo2.png"
              height="25px"
              alt="saiemgilani.me"
              style={{ paddingRight: 10, verticalAlign: 'bottom' }}
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Typography variant="h6" style={!isDark ? { color: '#fff' } : {}}>
              {NAME_AND_DOMAIN}
            </Typography>
          </a>
        </Link>
        <div className={classes.toolbarContent}>
          <Link href="/blog">
            <Button variant="text" color="inherit">
              <ViewHeadlineIcon />
              &nbsp;Blog
            </Button>
          </Link>
          <Link href="/topics">
            <Button variant="text" color="inherit">
              <CodeIcon />
              &nbsp;Topics
            </Button>
          </Link>
        </div>
        <div className={classes.toolbarRight}>
          <Tooltip title="Toggle Theme">
            <Button variant="text" color="inherit" onClick={toggleTheme}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
