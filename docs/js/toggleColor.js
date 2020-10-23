window.toggleScheme = function() {
  const body = document.querySelector("body")
  const preferSupported = window.matchMedia("(prefers-color-scheme)").media !== "not all"
  let scheme = body.getAttribute("data-md-color-scheme")
  let prefer = body.getAttribute("data-md-prefers-color-scheme")

  if (preferSupported && scheme === "default" && prefer !== "true") {
    prefer = "true"
    scheme = (window.matchMedia("(prefers-color-scheme: dark)").matches) ? "slate" : "default"
  } else if (preferSupported && prefer === "true") {
    prefer = "false"
    scheme = "slate"
  } else if (scheme === "slate") {
    prefer = "false"
    scheme = "default"
  } else {
    prefer = "false"
    scheme = "slate"
  }
  localStorage.setItem("data-md-prefers-color-scheme", prefer)
  body.setAttribute("data-md-prefers-color-scheme", prefer)
  body.setAttribute("data-md-color-scheme", scheme)
}
