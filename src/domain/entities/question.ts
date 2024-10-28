import { randomUUID } from "crypto"

interface QuestionProps{
  title: string
  content: string
  studentId: string
}


export class Question {
  public id: string
  public title: string
  public content: string
  public studentId: string

  constructor({content,studentId,title}: QuestionProps, id?: string) {
    this.title = title
    this.content = content
    this.studentId = studentId
    this.id = id ?? randomUUID()
  }
}