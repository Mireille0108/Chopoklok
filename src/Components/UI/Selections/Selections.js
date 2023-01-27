import React from "react";
import { Container } from "reactstrap";
import '../../../Styles/selections.css';

const Selections = (props) => {
  return (
    <div>
           <section className="common__section">
        <Container>
        <h2 className="text-white">{props.title}</h2>
        </Container>
    </section>
    </div>
  )
}

export default Selections