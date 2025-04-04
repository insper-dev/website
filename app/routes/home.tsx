import { Github } from 'lucide-react'
import { Button } from '~/components/ui/button'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Insper Dev' },
    { name: 'description', content: 'Welcome to Insper Dev!' },
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center p-8 h-screen">
      <h1 className="text-4xl font-bold">Insper Dev</h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md max-w-md">
        <div className="flex items-center">
          <span className="text-yellow-700">🚧</span>
          <p className="ml-2 text-yellow-700">
            <span className="font-semibold">Development Status:</span> This
            website is currently under active development. Features may be
            incomplete, and significant changes might occur.
          </p>
        </div>
      </div>

      <Button
        variant="default"
        size="lg"
        className="mt-4"
        onClick={() =>
          window.open('https://github.com/insper-dev/website', '_blank')
        }
      >
        <Github /> Github
      </Button>
    </div>
  )
}
