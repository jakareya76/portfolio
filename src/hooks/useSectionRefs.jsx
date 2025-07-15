import { useInView } from "react-intersection-observer";

export const useSectionRefs = () => {
  const [homeRef, homeInView] = useInView({
    threshold: 0.1,
    rootMargin: "-50px 0px -50% 0px",
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.1,
    rootMargin: "-50px 0px -50% 0px",
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
    rootMargin: "-50px 0px -50% 0px",
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.5, // Increased threshold for contact
    rootMargin: "-50px 0px -100px 0px", // Adjusted bottom margin
  });

  return {
    homeRef,
    projectsRef,
    aboutRef,
    contactRef,
    activeSection: homeInView
      ? "home"
      : projectsInView
      ? "projects"
      : aboutInView
      ? "about"
      : contactInView
      ? "contact"
      : "home",
  };
};
