import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Link href="/"><Navbar.Brand href='#'>React-Bootstrap</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Form inline className="mr-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav >
          <Link href="/about"><Nav.Link href="/about">About</Nav.Link></Link>
          <Link href="/contact"><Nav.Link href="/contact">Contact</Nav.Link></Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
}