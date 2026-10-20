export const subjectIds = [
  "programming-generative-ai",
  "innovation-business-models-entrepreneurship",
] as const;

export type SubjectId = (typeof subjectIds)[number];

export interface SubjectInfo {
  id: SubjectId;
  label: string;
  shortLabel: string;
  description: string;
  homeTitle: string;
}

export const subjects: Record<SubjectId, SubjectInfo> = {
  "programming-generative-ai": {
    id: "programming-generative-ai",
    label: "Programming with Generative AI",
    shortLabel: "GenAI",
    description: "Python fundamentals, algorithms, and GenAI-assisted programming — week-wise quizzes.",
    homeTitle: "Programming with Generative AI Quiz",
  },
  "innovation-business-models-entrepreneurship": {
    id: "innovation-business-models-entrepreneurship",
    label: "Innovation, Business Models and Entrepreneurship",
    shortLabel: "IBME",
    description: "Innovation, business models, sustainability, intellectual property, and entrepreneurship — Weeks 1–8.",
    homeTitle: "Innovation, Business Models and Entrepreneurship Quiz",
  },
};

export const subjectOptions = subjectIds.map((id) => subjects[id]);

export function getSubjectInfo(subjectId: SubjectId | null | undefined) {
  return subjectId ? subjects[subjectId] : null;
}
