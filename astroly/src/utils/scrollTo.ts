export const scrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const yOffset = -80; // espaço para navbar fixa
  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset +
    yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};