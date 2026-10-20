import { programmingGenerativeAiQuestions } from "@/data/programming-generative-ai-questions";
import { innovationBusinessModelsEntrepreneurshipQuestions } from "@/data/innovation-business-models-entrepreneurship-questions";
import type { Question } from "@/data/questions";
import type { SubjectId } from "@/data/subjects";

export function getQuestionsForSubject(subject: SubjectId): Question[] {
  switch (subject) {
    case "innovation-business-models-entrepreneurship":
      return innovationBusinessModelsEntrepreneurshipQuestions;
    case "programming-generative-ai":
      return programmingGenerativeAiQuestions;
    default:
      return programmingGenerativeAiQuestions;
  }
}

export function hasMultiSelectQuestions(subject: SubjectId): boolean {
  return getQuestionsForSubject(subject).some((question) => question.isMultiSelect);
}

export function getWeeksForSubject(subject: SubjectId): number[] {
  return Array.from(
    new Set(getQuestionsForSubject(subject).map((question) => question.week))
  ).sort((a, b) => a - b);
}
