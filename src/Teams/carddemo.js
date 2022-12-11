import React from 'react';
import cx from 'clsx';
import Color from 'color';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Row, Item } from '@mui-treasury/components/flex';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    overflow: 'auto',
    [breakpoints.only('xs')]: {
      '& > *:not(:first-child)': {
        paddingLeft: 0,
      },
    },
    [breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
}));


export const useStyles = makeStyles(({ palette }) => ({
  color: ({ color: string }) => ({
    '&:before': {
      backgroundColor: Color("white")
        .darken(0.3)
        .desaturate(0.2)
        .toString(),
    },
  }),
  root: {
    position: 'relative',
    borderRadius: '1rem',
    minWidth: 320,
    '&:before': {
      transition: '0.2s',
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      '&:before': {
        bottom: -6,
      },
      '& $logo': {
        transform: 'scale(1.1)',
        boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
      },
    },
  },
  cover: {
    borderRadius: '1rem',
  },
  content: ({ color: string }) => ({
    position: 'relative',
    zIndex: 1,
    borderRadius: '1rem',
    boxShadow: `0 6px 16px 0 ${Color("white").fade(0.5)}`,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
      clipPath:
        'polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)',
      borderRadius: '1rem',
      background: `linear-gradient(to top, ${"grey"}, ${Color("black")
        .rotate(24)
        .lighten(0.12)})`,
    },
  }),
  title: {
    fontFamily: 'Fjalla One',
    fontSize: '1.25rem',
    color: '#fff',
    margin: 0,
  },
  logo: {
    transition: '0.3s',
    width: 100,
    height: 100,
    boxShadow: '0 4px 12px 0 rgba(0,0,0,0.24)',
    borderRadius: '1rem',
  },
  team: {
    fontFamily: 'Sen',
    fontSize: '0.75rem',
    color: palette.text.hint,
  },
  date: {
    fontFamily: 'Sen',
    color: '#fff',
    backgroundColor: palette.text.hint,
    opacity: 0.72,
    fontSize: '0.75rem',
    padding: '0 0.5rem',
    borderRadius: 12,
  },
}));

export const CustomCard = ({ styles, cover, logo, title, brand, date }) => {
  const mediaStyles = useCoverCardMediaStyles();
  return (
    <Box className={cx(styles.root, styles.color)} pt={20}>
      
      <CardMedia image={cover} className={styles.cover} classes={mediaStyles} />
      <Box className={styles.content} p={2}>
        <Box position={'relative'} zIndex={1}>
          <Row p={0} gap={2}>
            <Item>
              <Avatar className={styles.logo} src={logo} />
            </Item>
            <Item position={'bottom'}>
              <h2 className={styles.title}>{title}</h2>
            </Item>
          </Row>
          <Row mt={4} alignItems={'center'}>
            <Item>
              <div className={styles.team}>{brand}</div>
            </Item>
            <Item position={'right'}>
              <div className={styles.date}>{date}</div>
            </Item>
          </Row>
        </Box>
      </Box>
    </Box>
  );
};
const cover1 = 'https://ekcfbmsotzc.exactdn.com/en/blog/wp-content/uploads/2022/09/top-5-greatest-chicago-bulls-players-of-all-time-michael-jordan-nba-betmgm.jpg?strip=all&lossy=1&ssl=1';

export const HighlightCardDemo = React.memo(function HighlightCard() {
  const styles1 = useStyles({ color: '#fc7944' });
  const styles2 = useStyles({ color: '#5357ce' });
  
  const gridStyles = useGridStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[{ font: 'Fjalla One' }, { font: 'Sen', weights: [500] }]}
        />
      </NoSsr>
      <div><Button type="primary">
          <Link to="/team2">到team2</Link>
        </Button></div>
      <Grid
        style={{ padding: 16 }}
        classes={gridStyles}
        wrap={'nowrap'}
        container
        spacing={4}
      >
        <Grid item>
          <CustomCard
            styles={styles1}
            brand={'Los Angeles Lakers'}
            date={'11.09.2022'}
            cover={
              'https://cdn.nba.com/teams/uploads/sites/1610612747/2021/12/2122_lal_mktg_web_postgame_blockimage2_520x557_em.jpg'
            }
            logo={'https://cdn.nba.com/teams/uploads/sites/1610612747/2021/12/lakers_70x70.svg'}
            title={
              <>
                Los Angeles Lakers
                <br />
              </>
            }
          />
          
        </Grid>
        <Grid item>
          <CustomCard
            styles={styles2}
            brand={'Chicago bulls'}
            // date={'02.04.2020'}
            cover={
              cover1
            }
            logo={
              'https://cdn.nba.com/teams/uploads/sites/1610612741/2021/10/bulls-svg.svg'
            }
            title={
              <>
                Chicago Bulls
                <br />
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
});

export default HighlightCardDemo;
