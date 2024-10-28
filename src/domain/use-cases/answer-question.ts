import { Answer } from "../entities/answer"

interface AnswerQuestionRequest{
  intructorId: string
  content: string
  questionId: string
}

export class AnswerQuestionUseCase{
  execute({intructorId, content, questionId}: AnswerQuestionRequest ){
    const answer = new Answer({
      content,
      authorId: intructorId,
      questionId
    })

    return answer
  }
}