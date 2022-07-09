export function changeTheme(theme: boolean) {
  if (theme) {
    document.body.setAttribute("arco-theme", "dark");
  } else {
    document.body.removeAttribute("arco-theme");
  }
}
