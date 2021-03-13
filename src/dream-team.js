module.exports = function createDreamTeam(members) {
  return !Array.isArray(members)
    ? false
    : members
        .filter((el) => typeof el === 'string')
        .reduce((acc, el) => {
          acc.push(el.trim().charAt(0).toUpperCase());
          return acc;
        }, [])
        .sort()
        .join('');
};
