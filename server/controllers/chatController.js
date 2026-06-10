import { GoogleGenerativeAI } from '@google/generative-ai'

export const chatWithAI = async (
  req,
  res
) => {
  try {
    console.log(
      'Gemini Key:',
      process.env.GEMINI_API_KEY
    )

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    )

    const model =
      genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
      })

    const { message } = req.body

    const prompt = `
You are an AI assistant for Gauravpreet Singh's portfolio website.

You help visitors:
- understand services
- learn about certifications
- ask about projects
- schedule meetings
- discuss pricing
- contact Gaurav

Services:
- Website Development
- Shopify Development
- Cloud Computing
- Mobile Apps
- Hosting
- Website Maintenance

Certifications:
- AWS Certified Developer Associate
- Oracle Certified Java SE 17 Developer

Keep responses concise, professional, and friendly.

User Question:
${message}
`

    const result =
      await model.generateContent(prompt)

    const response =
      await result.response

    const text = response.text()

    res.status(200).json({
      success: true,
      reply: text,
    })
  } catch (error) {
  console.error('Gemini Error:', error)

  res.status(500).json({
    success: false,
    error: error.message,
    details: error.errorDetails || error
  })
}
}