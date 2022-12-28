export const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
  desktopL: '1536px'
};

export const medias = {
  mobileS: `screen and (min-width: ${breakpoints.mobileS})`,
  mobileM: `screen and (min-width: ${breakpoints.mobileM})`,
  mobileL: `screen and (min-width: ${breakpoints.mobileL})`,
  tablet: `screen and (min-width: ${breakpoints.tablet})`,
  laptop: `screen and (min-width: ${breakpoints.laptop})`,
  desktop: `screen and (min-width: ${breakpoints.desktop})`,
  desktopL: `screen and (min-width: ${breakpoints.desktopL})`
};
