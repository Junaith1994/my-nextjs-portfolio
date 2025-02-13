const handleSlowScroll = (id) => {
  const section = document.getElementById(id);
  section && section.scrollIntoView({ behavior: "smooth" });
};

export default handleSlowScroll;
