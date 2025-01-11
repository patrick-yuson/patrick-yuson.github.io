export const useRedirect = () => {
  function redirectToUrl(url) {
    window.open(url, '_blank')
  }

  return { redirectToUrl }
}
