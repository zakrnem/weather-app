export function clearDOM() {
  let dashboard = document.querySelector(".dashboard")

  if (dashboard) {
    dashboard.remove()
  }
}
