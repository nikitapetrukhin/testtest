import Link from "./components/Link/page"
import Button from "./components/Button/page"
import Input from "./components/Input/page"
import Container from "./components/Container/page"

export default function Home() {
  return (
    <Container>
      <Link href='#'>Link</Link>
      <Button type='button' desabled='true'>Push the button</Button>
      <Input placeholder='text here' name='Name' />
    </Container>
  )
}
