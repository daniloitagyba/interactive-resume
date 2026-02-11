export const calculateDuration = (startDate: Date, language: "en" | "pt") => {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts = [];
  if (years > 0) {
    if (language === "en") {
      parts.push(`${years} year${years > 1 ? "s" : ""}`);
    } else {
      parts.push(`${years} ano${years > 1 ? "s" : ""}`);
    }
  }
  if (months > 0) {
    if (language === "en") {
      parts.push(`${months} month${months > 1 ? "s" : ""}`);
    } else {
      parts.push(`${months} ${months > 1 ? "meses" : "mês"}`);
    }
  }

  const joiner = language === "en" ? " and " : " e ";
  return parts.join(joiner);
};
