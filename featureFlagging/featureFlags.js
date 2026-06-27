export const FEATURE_FLAGS = {
  FEATURE_1: true,
  FEATURE_2: false,
};

export function isFeatureEnabled(flag) {
  return FEATURE_FLAGS[flag];
}

export function withFeatureFlag(flag, fn, fallback = () => undefined) {
  return function (...args) {
    if (isFeatureEnabled(flag)) {
      return fn.apply(null, args);
    }
    return fallback.apply(null, args);
  };
}
