export default (forwardedRef, refObj) => {
  if (forwardedRef) {
    typeof forwardedRef === 'object' && (forwardedRef.current = refObj);
    typeof forwardedRef === 'function' && forwardedRef(refObj);
  }
};
