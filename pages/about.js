import useTranslation from "next-translate/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("about:title")}</h1>
    </div>
  );
};

export default About;
