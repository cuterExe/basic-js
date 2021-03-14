const DATE_ERROR = 'Unable to determine the time of year!';

const SEASON_WINTER = 'winter';
const SEASON_SPRING = 'spring';
const SEASON_SUMMER = 'summer';
const SEASON_FALL = 'fall';

module.exports = function getSeason(date) {
  if (!date) return DATE_ERROR;
  if (Object.keys(date).length > 0) {
    throw new Error();
  }

  let month = date.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1:
      return SEASON_WINTER;
    case 2:
    case 3:
    case 4:
      return SEASON_SPRING;
    case 5:
    case 6:
    case 7:
      return SEASON_SUMMER;
    case 8:
    case 9:
    case 10:
      return SEASON_FALL;
  }
};
