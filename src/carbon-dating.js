const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const num = parseFloat(sampleActivity);
  if (isNaN(num) || num <= 0 || num > MODERN_ACTIVITY) return false;

  return Math.ceil(
    -(
      HALF_LIFE_PERIOD *
      (Math.log10(MODERN_ACTIVITY / num) / Math.log10(1 / 2))
    )
  );
};
