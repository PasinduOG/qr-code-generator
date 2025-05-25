// Local PropTypes implementation to work around import issues
const PropTypes = {
  string: { isRequired: {} },
  number: { isRequired: {} },
  bool: { isRequired: {} },
  array: { isRequired: {} },
  object: { isRequired: {} },
  func: { isRequired: {} },
  any: { isRequired: {} },
  node: { isRequired: {} },
  element: { isRequired: {} },
  oneOf: () => ({ isRequired: {} }),
  oneOfType: () => ({ isRequired: {} }),
  arrayOf: () => ({ isRequired: {} }),
  objectOf: () => ({ isRequired: {} }),
  shape: () => ({ isRequired: {} }),
  exact: () => ({ isRequired: {} }),
};

export default PropTypes;
