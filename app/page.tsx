import { readFile } from "fs/promises"

export default async function page() {
  const file = await readFile(process.cwd() + '/app/quote.json', 'utf8')
  const quote = JSON.parse(file)
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full p-4">
            <div className="font-semibold text-2xl">{quote.content}</div>
            <div className="font-semibold text-lg">{quote.author}</div>
        </div>
    </div>
  )
}
