const OBJ = 'object';
const FUNC = 'function';

/**
 * React `useImperativeHandle` for class component.
 * @param forwardedRef
 * @param refObj
 */
export default (forwardedRef, refObj) => {
  if (forwardedRef) {
    typeof forwardedRef === OBJ && (forwardedRef.current = refObj);
    typeof forwardedRef === FUNC && forwardedRef(refObj);
  }
};
