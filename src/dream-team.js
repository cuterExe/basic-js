module.exports = function createDreamTeam(members) {
  return !Array.isArray(members)
    ? false
    : members
        .reduce((acc, el) => {
          if (typeof el === 'string')
            acc.push(el.trim().charAt(0).toUpperCase());
          return acc;
        }, [])
        .sort()
        .join('');
};
